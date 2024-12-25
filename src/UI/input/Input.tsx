import { FC } from 'react'
import st from './input.module.css'

interface inputPropsInterface {
	type?: string
	placeholder?: string
	required?: boolean
	className?: string
	disabled?: boolean
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement>,
		errorState?: React.Dispatch<React.SetStateAction<string>>
	) => void 
	htmlFor?: string
	errorState?: React.Dispatch<React.SetStateAction<string>>
	setIsBlur?: React.Dispatch<React.SetStateAction<boolean>>
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
			className={`${
				type === 'checkbox' ? st.inputCheckbox : st.inputSettings
			} ${props.className ? props.className : ''}`}
			id={props.htmlFor}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				if(props.errorState, props.onChange)
					props.onChange(e, props.errorState)
			}}
			onBlur={() => {
				if(props.setIsBlur)
					props.setIsBlur(true)
			}}

			onFocus={() => {
				if(props.setIsBlur)
					props.setIsBlur(false)
			}}
		/>
	)
}
