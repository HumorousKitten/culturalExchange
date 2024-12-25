import { FC, ReactNode } from 'react'
import { auth } from '../../service/api/auth.service'
import { registration } from '../../service/api/registration.service'
import { useAuthStore } from '../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
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

	const navigate = useNavigate()

	async function handleButtonClick() {
		console.log(userEmail, userLogin, userPassword)
		if (error === 'noneError' && methodApi === 'registration') {
			const data = await registration(userLogin, userPassword, userEmail)

			if (!data) {
				changeDataResult(false)
				return
			}
			changeDataResult(true)
			navigate('/profile')
		}

		if (error === 'noneError' && methodApi === 'auth') {
			const data = await auth(userEmail, userPassword)

			if (!data) {
				changeDataResult(false)
				return
			}
			changeDataResult(true)
			navigate('/profile')
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
