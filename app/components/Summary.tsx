import { withZod } from '@remix-validated-form/with-zod'
import { useEffect, useState } from 'react'
import type { RegistrationForm } from '~/lib/validator'
import { CombinedZod } from '~/lib/validator'
import DescriptionEntry from './DescriptionEntry'

interface Props {
  getFormData: () => FormData | undefined
}

const Summary = ({ getFormData }: Props) => {
  const [summary, setSummary] = useState<RegistrationForm>()

  useEffect(() => {
    const formData = getFormData()
    if (!formData) return

    withZod(CombinedZod)
      .validate(formData)
      .then(({ data }) => {
        // We assume the validation is correct since we got to this component at all
        setSummary(data)
      })
  }, [getFormData])

  return (
    <div>
      <h1 className='text-2xl text-white'>Summary</h1>
      <dl className='mt-4 grid grid-cols-2 gap-y-4'>
        <DescriptionEntry
          term='Approver'
          description={summary?.approver.name}
        />
        <DescriptionEntry term='Name' description={summary?.name} />
        <DescriptionEntry term='Mail' description={summary?.email} />
        <DescriptionEntry term='Boat' description={summary?.boat.name} />
      </dl>
    </div>
  )
}

export default Summary
