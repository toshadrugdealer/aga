import cl from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	className,
	...props
}) => {
	return (
		<>
			<button
				className={cl(
					'border px-4 text-2xl py-3  text-white font-bold rounded-2xl bg-[#FF5D17]',
					className
				)}
				{...props}
			>
				{children}
			</button>
		</>
	)
}
