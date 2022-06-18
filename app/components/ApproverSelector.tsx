import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useControlField, useField } from 'remix-validated-form'
import type { Person } from '~/lib/people'
import { people } from '~/lib/people'

const fieldName = 'approver'

// https://headlessui.dev/react/combobox
const ApproverSelector = () => {
  const [query, setQuery] = useState('')
  const { error, validate } = useField(fieldName)
  const [selected, setSelected] = useControlField<Person>(fieldName)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  const _onSelect = (person: Person) => {
    setSelected(person)
    validate()
  }

  return (
    <fieldset>
      <Combobox value={selected} onChange={_onSelect} name={fieldName}>
        <div className='relative'>
          <Combobox.Label className='font-medium'>Approver</Combobox.Label>

          <div className='relative mt-1'>
            <Combobox.Input
              className='w-full rounded-md p-2 pr-10 text-black'
              displayValue={(person: Person) => person?.name}
              placeholder='Kaido'
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <SelectorIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              {filteredPeople.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-sky-500 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-sky-500'
                            }`}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <div className='h-5'>
        {error && <span className='text-red-500'>{error}</span>}
      </div>
    </fieldset>
  )
}

export default ApproverSelector
