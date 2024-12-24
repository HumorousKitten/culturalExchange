import {FC, ReactNode } from 'react'
import st from './label.module.css'

interface ILabelProps {
	children: ReactNode[]
	htmlFor: string
	className?: string
}

export const Label: FC<ILabelProps> = ({children, htmlFor, className}) => {
	return (
		<label htmlFor={htmlFor} className={className ? st[className] : ''}>
			{htmlFor === 'agreeTerm' ? null : <p className={st.labelTitle}>{children[0]}</p>}
			{htmlFor === 'agreeTerm' ? children[0] : children[1]}
			{htmlFor === 'agreeTerm' ? children[1] : null}
		</label>
	);
}
 