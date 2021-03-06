import type { FormEvent } from 'react'
import { useState } from 'react'
import Contact from '~/components/Contact'
import Boats from '~/components/Boats'
import Summary from '~/components/Summary'
import Button from '../components/Button'
import Stepper from '../components/Stepper'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { BoatZod, CombinedZod, ContactZod, SummaryZod } from '~/lib/validator'
import type { Validator } from 'remix-validated-form'
import { ValidatedForm, validationError } from 'remix-validated-form'
import useFormData from '~/lib/useFormData'
import { withZod } from '@remix-validated-form/with-zod'

interface Step {
  title: string
  validator: Validator<{}>
}

const steps: Step[] = [
  { title: 'Contact', validator: withZod(ContactZod) },
  { title: 'Boat', validator: withZod(BoatZod) },
  { title: 'Summary', validator: withZod(SummaryZod) },
]

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const result = await withZod(CombinedZod).validate(formData)
  console.log(result.data)

  if (result.error) {
    return validationError(result.error)
  }

  return redirect(`/projects/${result.data.name}`)
}

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0)
  const isLastStep = currentStep === steps.length - 1
  const { ref, getFormData } = useFormData()

  const _onPrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1))
  }

  const _onSubmit = (_: unknown, event: FormEvent) => {
    if (!isLastStep) {
      event.preventDefault()

      setCurrentStep(Math.min(currentStep + 1, steps.length - 1))
      return
    }
  }

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
          validator={steps[currentStep].validator}
          method='post'
          formRef={ref}
        >
          <fieldset
            className='flex min-h-[536px] flex-col items-center justify-center space-y-6 rounded-xl 
          bg-slate-800/70 p-10 shadow-[inset_0_2px_3px_rgba(255,255,255,0.06)] ring-white/[.15] backdrop-blur-xl'
          >
            <Stepper currentStep={currentStep} steps={steps} />

            <div className='min-h-[300px] w-full'>
              {/* We use hidden to keep the state even when we are not on that step */}
              <div hidden={currentStep !== 0}>
                <Contact />
              </div>

              <div hidden={currentStep !== 1}>
                <Boats />
              </div>
              {currentStep === 2 && (
                <div>
                  <Summary getFormData={getFormData} />
                </div>
              )}
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
