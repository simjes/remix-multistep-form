import React from 'react'
import cn from 'classnames'

interface Step {
  title: string
  link: string
}

const steps: Step[] = [
  { title: 'Contact', link: '/' },
  { title: 'Speccs', link: '/form/speccs' },
  { title: 'Summary', link: '/form/summary' },
]

interface Props {
  currentStep: number
  onClickStep: (step: number) => void
}

const Stepper = ({ currentStep, onClickStep }: Props) => {
  return (
    <nav className='w-full'>
      <ol className={`grid grid-cols-3`}>
        {steps.map((step, index) => (
          <li key={step.title} className='flex justify-center'>
            {/* aria-current='step' */}
            <button
              aria-current={currentStep === index ? 'step' : undefined}
              onClick={() => onClickStep(index)}
              className='flex flex-col items-center space-y-2 font-bold'
            >
              <span
                className={cn(
                  'rounded-full border-2 border-fuchsia-400 py-1 px-3',
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
