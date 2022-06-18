import type { RegistrationForm } from '~/lib/validator'

interface Props {
  formStuff?: RegistrationForm
  hidden: boolean
}

const Summary = ({ hidden, formStuff }: Props) => {
  return (
    <div hidden={hidden}>
      <h1>Summary</h1>
      <div>{formStuff?.approver}</div>
      <div>{formStuff?.email}</div>
      <div>{formStuff?.name}</div>
    </div>
  )
}

export default Summary
