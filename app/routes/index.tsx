import type { FormEvent } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import Contact from '~/components/Contact'
import Boats from '~/components/Boats'
import Summary from '~/components/Summary'
import Button from '../components/Button'
import type { Step } from '../components/Stepper'
import Stepper from '../components/Stepper'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import type { RegistrationForm } from '~/lib/validator'
import { BoatZod, ContactZod, SummaryZod } from '~/lib/validator'
import { useFormContext, ValidatedForm } from 'remix-validated-form'
import useFormData from '~/lib/useFormData'
import { withZod } from '@remix-validated-form/with-zod'

const steps: Step[] = [
  { title: 'Contact' },
  { title: 'Boat' },
  { title: 'Summary' },
]

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const values = Object.fromEntries(formData)
  console.log(values)
  return redirect(`/projects/${formData.get('name')}`)
}

export default function Index() {
  const form = useFormContext('reg')
  const [currentStep, setCurrentStep] = useState(1)
  const isLastStep = currentStep === steps.length - 1
  const { ref, getFormData } = useFormData()
  const [data, setData] = useState<RegistrationForm>()

  const validator = useMemo(() => {
    if (currentStep === 0) return withZod(ContactZod)
    if (currentStep === 1) return withZod(BoatZod)
    return withZod(SummaryZod)
  }, [currentStep])

  const _onPrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1))
  }

  const _onSubmit = (_: unknown, event: FormEvent) => {
    if (!isLastStep) {
      event.preventDefault()
      const formData = getFormData()
      console.log(formData)
      setData(formData)

      setCurrentStep(Math.min(currentStep + 1, steps.length - 1))
      return
    }
  }
  console.log(form.fieldErrors)

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='relative w-[500px]'>
        <div
          aria-hidden
          className='absolute left-0 right-0 top-2/3 -z-10 mx-auto block h-52 w-52 
          rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 blur-xl'
        />

        <ValidatedForm
          onSubmit={_onSubmit}
          validator={validator}
          method='post'
          formRef={ref}
        >
          <fieldset
            className='flex min-h-[50vh] flex-col items-center justify-center space-y-6 rounded-xl 
          bg-slate-800/70 p-10 shadow-[inset_0_2px_3px_rgba(255,255,255,0.06)] ring-white/[.15] backdrop-blur-xl'
          >
            <Stepper currentStep={currentStep} steps={steps} />

            <div className='flex w-full flex-grow justify-center'>
              <Contact hidden={currentStep !== 0} />
              <Boats hidden={currentStep !== 1} />
              <Summary hidden={currentStep !== 2} formStuff={data} />
            </div>

            <div className='space-x-4 self-end'>
              {currentStep > 0 && (
                <Button onClick={_onPrevious} direction='backward'>
                  Previous
                </Button>
              )}

              <Button type='submit' direction='forward'>
                {isLastStep ? 'Save' : 'Next'}
              </Button>
            </div>
          </fieldset>
        </ValidatedForm>
      </div>
    </div>
  )
}
