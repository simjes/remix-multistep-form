import React from 'react'
import cn from 'classnames'

export interface Step {
  title: string
}

interface Props {
  currentStep: number
  steps: Step[]
  onClickStep: (step: number) => void
}

const Stepper = ({ currentStep, steps, onClickStep }: Props) => {
  return (
    <nav className='w-full'>
      <ol className={`grid grid-cols-3`}>
        {steps.map((step, index) => (
          <li key={step.title} className='flex justify-center'>
            <button
              aria-current={currentStep === index ? 'step' : undefined}
              onClick={() => onClickStep(index)}
              className='flex flex-col items-center space-y-2 font-bold'
            >
              <span
                className={cn(
                  'rounded-full border-2 border-fuchsia-400 py-1 px-3 transition duration-300 ease-in-out hover:bg-sky-500 hover:text-white',
                  {
                    'bg-fuchsia-400 text-white': currentStep === index,
                  },
                )}
              >
                {index + 1}
              </span>
              <span>{step.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Stepper
