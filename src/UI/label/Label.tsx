import {FC, ReactNode } from 'react'
import st from './label.module.css'

interface ILabelProps {
	children: ReactNode[]
	htmlFor: string
	className?: string
}

export const Label: FC<ILabelProps> = ({children, htmlFor, className}) => {
	return (
		<label htmlFor={htmlFor} className={className ? className : ''}>
			<span className={st.labelTitle}>{children[0]}</span>
			{children[1]}
		</label>
	);
}
 