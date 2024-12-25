import { FC, ReactNode } from 'react'
import { auth } from '../../service/api/auth.service'
import { registration } from '../../service/api/registration.service'
import { useAuthStore } from '../../store/useAuthStore'
import st from './button.module.css'

interface IButtonProps {
	children: ReactNode
	type?: 'button' | 'submit'
	methodApi?: 'registration' | 'auth'
}

export const Button: FC<IButtonProps> = ({
	type = 'button',
	children,
	methodApi = '',
}) => {
	const { error, userEmail, userLogin, userPassword, changeDataResult, dataResult} =
		useAuthStore()

	async function handleButtonClick() {
		console.log(userEmail, userLogin, userPassword)
		if (error === 'noneError' && methodApi === 'registration') {
			const data = await registration(userEmail, userLogin, userPassword)
			console.log(data)
			if (!data) {
				changeDataResult(false)
				return
			}
			changeDataResult(true)
		}

		if (error === 'noneError' && methodApi === 'auth') {
			const data = await auth(userEmail, userPassword)
			console.log(data)
			if (!data) {
				changeDataResult(false)
				return
			}
			changeDataResult(true)
		}
	}

	return (
		<button
			className={`${st.button} ${st.buttonChildren} ${!dataResult ? st.buttonError : ''}`}
			onClick={handleButtonClick}
			type={type}
		>
			{children}
		</button>
	)
}
