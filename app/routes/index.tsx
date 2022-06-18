import { MouseEvent, useRef, useState } from 'react'
import Contact from '~/components/Contact'
import Boats from '~/components/Boats'
import Summary from '~/components/Summary'
import Button from '../components/Button'
import Stepper, { Step } from '../components/Stepper'
import { Form } from '@remix-run/react'
import { ActionFunction, redirect } from '@remix-run/node'

const steps: Step[] = [
  { title: 'Contact' },
  { title: 'Boat' },
  { title: 'Summary' },
]

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  console.log(JSON.stringify(formData))
  return redirect(`/projects/${formData.get('name')}`)
}

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0)
  const formRef = useRef(null)
  const isLastStep = currentStep === steps.length - 1

  const _onClickStep = (event: MouseEvent<HTMLButtonElement>, step: number) => {
    // Seems to trigger submit when going to the last step
    event.preventDefault()
    if (step === currentStep) return

    if (step < currentStep) {
      setCurrentStep(Math.max(0, step))
      return
    }

    if (step > currentStep) {
      setCurrentStep(Math.min(step, steps.length - 1))
      return
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='relative w-[500px]'>
        <div
          aria-hidden
          className='absolute left-0 right-0 top-2/3 -z-10 mx-auto block h-52 w-52 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 blur-xl'
        />

        <Form method='post' ref={formRef}>
          <div className='flex min-h-[50vh] flex-col items-center justify-center space-y-6 rounded-xl bg-slate-800/70 p-10 shadow-[inset_0_2px_3px_rgba(255,255,255,0.06)] ring-white/[.15] backdrop-blur-xl'>
            <Stepper
              currentStep={currentStep}
              steps={steps}
              onClickStep={_onClickStep}
            />

            <div className='flex h-64 w-full flex-grow justify-center'>
              {currentStep === 0 && <Contact />}
              {currentStep === 1 && <Boats />}
              {currentStep === 2 && <Summary formThing={formRef.current} />}
            </div>

            <div className='space-x-4 self-end'>
              {currentStep > 0 && (
                <Button
                  onClick={(event) => _onClickStep(event, currentStep - 1)}
                  direction='backward'
                >
                  Previous
                </Button>
              )}
              {isLastStep ? (
                <Button type='submit' direction='forward'>
                  Save
                </Button>
              ) : (
                <Button
                  onClick={(event) => _onClickStep(event, currentStep + 1)}
                  direction='forward'
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}
