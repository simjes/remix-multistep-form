import { useRef } from 'react'
import type { RegistrationForm } from './validator'

const useFormData = () => {
  const ref = useRef(null)

  const getFormData = () => {
    if (ref.current) {
      const data = new FormData(ref.current)
      return Object.fromEntries(data) as RegistrationForm
    }
    return undefined
  }

  return {
    ref,
    getFormData,
  }
}

export default useFormData
