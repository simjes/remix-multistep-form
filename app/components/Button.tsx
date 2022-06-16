import * as React from 'react'
import cn from 'classnames'

interface Props extends HTMLButtonElement {
  children: React.ReactNode
  type?: 'button' | 'submit'
  direction: 'backward' | 'forward'
}

const Button: React.FC<Props> = ({
  children,
  direction,
  type = 'button',
  ...rest
}) => (
  <button
    type={type}
    className={cn(
      'py-2 px-4 font-semibold rounded-full transition duration-300 ease-in-out',
      {
        'text-white bg-fuchsia-500 hover:bg-fuchsia-400':
          direction === 'forward',
        'text-black bg-slate-400 hover:bg-slate-300': direction === 'backward',
      },
    )}
    {...rest}
  >
    {children}
  </button>
)

export default Button
