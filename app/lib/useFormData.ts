import { useRef } from 'react'
import type { FormStuff } from './validator'

const useFormData = () => {
  const ref = useRef(null)

  const getFormData = () => {
    if (ref.current) {
      const data = new FormData(ref.current)
      var formStuff: FormStuff = {} as FormStuff
      data.forEach((value, key) => (formStuff[key] = value))
      return formStuff
    }
    return undefined
  }

  return {
    ref,
    getFormData,
  }
}

export default useFormData
