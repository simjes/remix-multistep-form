import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useControlField, useField } from 'remix-validated-form'
import type { Boat } from '~/lib/boats'
import { boats } from '~/lib/boats'

interface Props {
  hidden: boolean
}

const fieldName = 'boat'

// https://headlessui.dev/react/radio-group
const Boats = ({ hidden }: Props) => {
  const { error, validate } = useField(fieldName)
  const [selected, setSelected] = useControlField<Boat>(fieldName)

  const _onSelect = (boat: Boat) => {
    setSelected(boat)
    validate()
  }

  return (
    <div className='w-full' hidden={hidden}>
      <div className='mx-auto w-full max-w-md'>
        <RadioGroup value={selected} onChange={_onSelect} name={fieldName}>
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
                {({ checked }) => (
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
                            </span>
                            <span aria-hidden='true'>&middot;</span>
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
      <div className='h-5'>
        {error && <span className='text-red-500'>{error}</span>}
      </div>
    </div>
  )
}

export default Boats

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
