import * as React from 'react'
import Button from '../components/Button'
import Stepper from '../components/Stepper'

export default function Index() {
  const [currentStep, setCurrentStep] = React.useState(0)

  const _onClickStep = (step: number) => {
    setCurrentStep(step)
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
          <Stepper currentStep={currentStep} onClickStep={_onClickStep} />
          <div className='flex-grow'>ble</div>
          <div className='space-x-4 self-end'>
            <Button direction='backward'>Previous</Button>
            <Button direction='forward'>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
