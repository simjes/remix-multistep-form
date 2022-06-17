import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

interface Person {
  id: number
  name: string
}

const people: Person[] = [
  { id: 1, name: 'Trafalgar Law' },
  { id: 2, name: 'Shanks' },
  { id: 3, name: 'Boa' },
  { id: 4, name: 'Kaido' },
  { id: 5, name: 'Buddy' },
  { id: 6, name: 'Linlin' },
]

// https://headlessui.dev/react/combobox
const ApproverSelector = () => {
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  return (
    <div>
      <label className='font-medium' htmlFor='approver-selector'>
        Approver
      </label>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <div>
            <Combobox.Input
              id='approver-selector'
              className='w-full rounded-md p-2 pr-10 text-black'
              displayValue={(person: Person) => person?.name}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Moneky D. Garp'
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
    </div>
  )
}

export default ApproverSelector
