import { FC } from 'react'
import st from './input.module.css'

interface inputPropsInterface {
	type: string
	placeholder?: string
	required: boolean
	className?: string
	disabled?: boolean
	value?: string
	onChange?: (event: any) => void
	htmlFor?: string
}

export const Input: FC<inputPropsInterface> = ({
	type = 'text',
	required = false,
	...props
}) => {
	return (
		<input
			type={type}
			required={required}
			placeholder={props.placeholder ? props.placeholder : ''}
			className={`${type === 'checkbox' ? st.inputCheckbox :st.inputSettings} ${
				props.className ? props.className : ''
			}`}
			value={props.value ? props.value : ''}
			id={props.htmlFor}
			{...props}
		/>
	)
}
