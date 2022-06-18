import { useField } from 'remix-validated-form'

interface Props {
  name: string
  label: string
  placeholder: string
}

const FieldInput = ({ name, label, placeholder }: Props) => {
  const { error, getInputProps } = useField(name)
  return (
    <div>
      <label className='flex flex-col'>
        <span className='font-medium'>{label}</span>
        <input
          {...getInputProps()}
          className='mt-1 rounded-md p-2 text-black'
          placeholder={placeholder}
        />
      </label>
      <div className='h-5'>
        {error && <span className='text-red-500'>{error}</span>}
      </div>
    </div>
  )
}

export default FieldInput
