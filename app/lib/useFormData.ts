import { useRef } from 'react'

const useFormData = () => {
  const ref = useRef(null)

  const getFormData = () => {
    if (ref.current) {
      return new FormData(ref.current)
    }
    return undefined
  }

  return {
    ref,
    getFormData,
  }
}

export default useFormData
