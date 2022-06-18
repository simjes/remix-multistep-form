import type { FormStuff } from '~/lib/validator'

interface Props {
  formStuff?: FormStuff
  hidden: boolean
}

const Summary = ({ hidden, formStuff }: Props) => {
  if (!hidden) {
    debugger
  }
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
