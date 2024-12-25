import { FC } from 'react'
import st from './textArea.module.css'

interface ItextAreaProps {
	placeholder?: string
	required?: boolean
	className?: string
	disabled?: boolean
	htmlFor?: string

}

export const TextArea:FC<ItextAreaProps> = ({htmlFor, placeholder,...props}) => {
	return (
		<textarea id={htmlFor} placeholder={placeholder} className={st.interestsArea}></textarea>
	);
}
