import ApproverSelector from './ApproverSelector'
import FieldInput from './FieldInput'

interface Props {
  hidden: boolean
}

const Contact = ({ hidden }: Props) => {
  return (
    <fieldset className='w-72 space-y-4' hidden={hidden}>
      <FieldInput name='name' label='Name' placeholder='Monkey D. Luffy' />

      <FieldInput name='email' label='Mail' placeholder='luffy@op.com' />

      <ApproverSelector />
    </fieldset>
  )
}

export default Contact
