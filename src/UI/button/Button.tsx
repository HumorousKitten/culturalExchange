import { FC, ReactElement } from 'react'
import st from './button.module.css'

interface IButtonProps {
	children: ReactElement
	onClick: (e: any) => void
}

export const Button: FC<IButtonProps> = ({ children, onClick }) => {
	return (
		<button className={`${st.button} ${st.buttonChildren}`} onClick={onClick}>
			{children}
		</button>
	)
}
