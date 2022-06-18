import ApproverSelector from './ApproverSelector'

// TODO: validering
const Contact = () => {
  return (
    <fieldset className='w-72 space-y-4'>
      <label className='flex flex-col'>
        <span className='font-medium'>Name</span>
        <input
          name='name'
          className='mt-1 rounded-md p-2 text-black'
          placeholder='Monkey D. Luffy'
        />
      </label>

      <label className='flex flex-col'>
        <span className='font-medium'>Mail</span>
        <input
          name='email'
          className='mt-1 rounded-md p-2 text-black'
          placeholder='luffy@op.com'
          type='email'
        />
      </label>

      <ApproverSelector />
    </fieldset>
  )
}

export default Contact
