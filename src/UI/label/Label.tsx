import React, { FC, ReactElement, ReactNode } from 'react'
import st from './label.module.css'
import { useAuthStore } from '../../store/useAuthStore'


interface ILabelProps {
	children: ReactNode[]
	htmlFor: string
	className?: string
}

export const Label: FC<ILabelProps> = ({ children, htmlFor, className }) => {
	const {changeError} = useAuthStore()
	const [error, setError] = React.useState<string>('')
	const [isBlur, setIsBlur] = React.useState<boolean>(false)

	React.useEffect(() => {
		if(isBlur && !error){
			changeError('noneError')
			return
		}
		if(isBlur)
			changeError(error)

	}, [isBlur])

	return (
		<label htmlFor={htmlFor} className={className ? st[className] : ''}>
			{htmlFor === 'agreeTerm' ? null : (
				<p className={st.labelTitle}>{children[0]}</p>
			)}
			{htmlFor === 'agreeTerm'
				? children[0]
				: React.cloneElement(children[1] as ReactElement, {
						errorState: setError,
						setIsBlur: setIsBlur,
				  })}
			{htmlFor !== 'agreeTerm' ? error && isBlur ? <p className={st.errorText}>{error}</p> : null : null}
			{htmlFor === 'agreeTerm' ? children[1] : null}
		</label>
	)
}
