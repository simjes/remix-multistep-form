import ApproverSelector from './ApproverSelector'
import FieldInput from './FieldInput'

const Contact = () => {
  return (
    <fieldset className='space-y-4'>
      <ApproverSelector />

      <FieldInput name='name' label='Name' placeholder='Monkey D. Luffy' />

      <FieldInput name='email' label='Mail' placeholder='luffy@op.com' />
    </fieldset>
  )
}

export default Contact
