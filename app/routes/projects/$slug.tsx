import { useParams } from '@remix-run/react'

export default function Index() {
  const { slug } = useParams()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-8xl'>Success 🎉</h1>
      <p className='mt-4 text-3xl'>{slug} was saved</p>
    </div>
  )
}
