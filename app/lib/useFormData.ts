import { useRef } from 'react'
import type { RegistrationForm } from './validator'

const useFormData = () => {
  const ref = useRef(null)

  const getFormData = () => {
    if (ref.current) {
      const data = new FormData(ref.current)
      const ble = Object.fromEntries(data) as RegistrationForm
      console.log(ble)
      return ble
    }
    return undefined
  }

  return {
    ref,
    getFormData,
  }
}

export default useFormData
