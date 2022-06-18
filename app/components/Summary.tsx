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
      <div>{JSON.stringify(formStuff)}</div>
    </div>
  )
}

export default Summary

const bler = {
  'approver[id]': '2',
  'approver[name]': 'Shanks',
  approver: 'Shanks',
  name: 'lol',
  email: 'l@l.com',
  'boat[id]': '1',
  'boat[name]': 'Thousand Sunny',
  'boat[height]': '56m',
  'boat[length]': '39m',
  'boat[crew]': 'Straw Hat Pirates',
}
