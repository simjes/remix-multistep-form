import { useState } from 'react'
import Contact from '~/components/Contact'
import Speccs from '~/components/Speccs'
import Summary from '~/components/Summary'
import Button from '../components/Button'
import Stepper, { Step } from '../components/Stepper'

const steps: Step[] = [
  { title: 'Contact' },
  { title: 'Speccs' },
  { title: 'Summary' },
]

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0)

  const _onClickStep = (step: number) => {
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
      <div className='relative w-1/2'>
        <div
          aria-hidden
          className='absolute left-0 right-0 top-2/3 -z-10 mx-auto block h-52 w-52 rounded-full bg-gradient-to-b
        from-violet-500 to-fuchsia-500 blur-xl'
        />

        <div className='flex min-h-[50vh] flex-col items-center justify-center space-y-4 rounded-xl bg-slate-800/70 p-10 shadow-[inset_0_2px_3px_rgba(255,255,255,0.06)] ring-white/[.15] backdrop-blur-xl'>
          <Stepper
            currentStep={currentStep}
            steps={steps}
            onClickStep={_onClickStep}
          />

          <div className='flex-grow'>
            {currentStep === 0 && <Contact />}
            {currentStep === 1 && <Speccs />}
            {currentStep === 2 && <Summary />}
          </div>

          <div className='space-x-4 self-end'>
            {currentStep > 0 && (
              <Button
                onClick={() => _onClickStep(currentStep - 1)}
                direction='backward'
              >
                Previous
              </Button>
            )}
            <Button
              onClick={() => _onClickStep(currentStep + 1)}
              direction='forward'
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
