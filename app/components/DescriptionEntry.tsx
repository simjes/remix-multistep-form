import React from 'react'

interface Props {
  term: string
  description?: string
}

const DescriptionEntry = ({ term, description = '' }: Props) => {
  return (
    <div>
      <dt className='font-medium'>{term}</dt>
      <dd className='text-xl text-white'>{description}</dd>
    </div>
  )
}

export default DescriptionEntry
