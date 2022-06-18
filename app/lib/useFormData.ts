import { useRef } from 'react'

const useFormData = () => {
  const ref = useRef(null)

  const getFormData = () => {
    if (ref.current) {
      const data = new FormData(ref.current)
      // const ble = Object.fromEntries(data) as RegistrationForm
      // console.log(ble)
      return data
    }
    return undefined
  }

  return {
    ref,
    getFormData,
  }
}

export default useFormData
