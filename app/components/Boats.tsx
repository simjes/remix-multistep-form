import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

interface Boat {
  id: number
  name: string
  height: string
  length: string
  crew: string
}

const boats: Boat[] = [
  {
    id: 1,
    name: 'Thousand Sunny',
    height: '56m',
    length: '39m',
    crew: 'Straw Hat Pirates',
  },
  {
    id: 2,
    name: 'Sanjuan Wolf — Colossal Battleship',
    height: '180m',
    length: 'Unknown',
    crew: 'Blackbeard Pirates',
  },
  {
    id: 3,
    name: 'Thriller Bark',
    height: 'Unknown',
    length: '1953m',
    crew: 'Thriller Bark Pirates',
  },
]

interface Props {
  hidden: boolean
}

// https://headlessui.dev/react/radio-group
export default function Boats({ hidden }: Props) {
  const [selected, setSelected] = useState()

  return (
    <div className='w-full' hidden={hidden}>
      <div className='mx-auto w-full max-w-md'>
        <RadioGroup value={selected} onChange={setSelected} name='boat'>
          <RadioGroup.Label className='font-medium'>Ship</RadioGroup.Label>
          <div className='mt-1 space-y-2'>
            {boats.map((boat) => (
              <RadioGroup.Option
                key={boat.id}
                value={boat}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${checked ? 'bg-sky-500 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-3 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex w-full items-center justify-between'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {boat.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='span'
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              H: {boat.height}, L: {boat.length}
                            </span>{' '}
                            <span aria-hidden='true'>&middot;</span>{' '}
                            <span>{boat.crew}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className='shrink-0 text-white'>
                          <CheckIcon className='h-6 w-6' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props: any) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
