import cn from 'classnames'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit'
  direction: 'backward' | 'forward'
  onClick: () => void
}

const Button: React.FC<Props> = ({
  children,
  direction,
  type = 'button',
  onClick,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={cn(
      'rounded-full py-2 px-4 font-semibold transition duration-300 ease-in-out',
      {
        'bg-fuchsia-500 text-white hover:bg-fuchsia-400':
          direction === 'forward',
        'bg-slate-400 text-black hover:bg-slate-300': direction === 'backward',
      },
    )}
  >
    {children}
  </button>
)

export default Button
