import { FC, ReactNode } from 'react'
import st from './button.module.css'

interface IButtonProps {
	children: ReactNode
	onClick?: (e: any) => void
}

export const Button: FC<IButtonProps> = ({ children, onClick }) => {
	return (
		<button className={`${st.button} ${st.buttonChildren}`} onClick={onClick}>
			{children}
		</button>
	)
}
