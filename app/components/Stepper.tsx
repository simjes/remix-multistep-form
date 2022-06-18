import cn from 'classnames'
import { CheckIcon } from '@heroicons/react/solid'

interface Step {
  title: string
}

interface Props {
  currentStep: number
  steps: Step[]
}

const Stepper = ({ currentStep, steps }: Props) => {
  return (
    <nav className='w-full'>
      <ol className='before:content[""] relative grid grid-cols-3 before:absolute before:left-0 before:right-0 before:top-1/4 before:-z-10 before:mx-auto before:h-1 before:w-4/5 before:bg-fuchsia-400'>
        {steps.map((step, index) => (
          <li
            key={step.title}
            className='flex justify-center first-of-type:justify-start last-of-type:justify-end'
          >
            <div
              aria-current={currentStep === index ? 'step' : undefined}
              className='flex flex-col items-center space-y-2 font-bold'
            >
              <span
                className={cn(
                  'rounded-full border-2 border-fuchsia-400 text-white transition duration-300 ease-in-out',
                  currentStep > index ? 'p-1' : 'py-1 px-3',
                  currentStep === index ? 'bg-fuchsia-400' : 'bg-slate-800',
                )}
              >
                {currentStep <= index && index + 1}
                {currentStep > index && <CheckIcon className='h-6 w-6' />}
              </span>
              <span>{step.title}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Stepper
