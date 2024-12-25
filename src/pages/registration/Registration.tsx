import { Button } from '../../UI/button/Button'
import { Input } from '../../UI/input/Input'
import { IsAccount } from '../../UI/isAccount/IsAccount'
import { Label } from '../../UI/label/Label'
import { MainTitle } from '../../UI/mainTitle/MainTitle'
import { UnderTitle } from '../../UI/underTitle/UnderTitle'
import st from './registration.module.css'
import { validateLogin } from '../../utils/validation/validateLogin'
import { validateEmail } from '../../utils/validation/validateEmail'
import { validatePassword } from '../../utils/validation/validatePassword'
import { useAuthStore } from '../../store/useAuthStore'
import React from 'react'



const Registration = () => {
	const {changeEmail, changeLogin, changePassword, dataResult, changeDataResult} = useAuthStore()

	React.useEffect(() => {
		if(!dataResult)
			changeDataResult(true)
	}, [])

	function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>, errorState: React.Dispatch<React.SetStateAction<string>>) {
		const message = validateLogin(e.target.value)
	
		if(message !== 'Имя валидно'){
			errorState(message)
			
			return
		}
		changeLogin(e.target.value)
		errorState('')
	}

	
	function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>, errorState: React.Dispatch<React.SetStateAction<string>>) {
		const flag = validateEmail(e.target.value)
	
		if(!flag){
			errorState('неверный формат даты')
			return
		}
		changeEmail(e.target.value)
		errorState('')
	}

	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>, errorState: React.Dispatch<React.SetStateAction<string>>) {
		const message = validatePassword(e.target.value)
	
		if(message !== 'Пароль валиден'){
			errorState(message)
			return
		}
		changePassword(e.target.value)
		errorState('')
	}

	return (
		<main>
			<form className={`${st.wrapper} ${st.form}`}>
				<MainTitle title={'Регистрация'} />
				<UnderTitle
					underTitle={'Введите свои данные для создания учетной записи'}
				/>

				<div className={st.formInputs}>
					<Label htmlFor={'name'}>
						Имя
						<Input
							required={true}
							placeholder={'Введите ваше имя'}
							htmlFor={'name'}
							onChange={handleLoginChange}
						/>
					</Label>

					<Label htmlFor={'email'}>
						Электронная почта
						<Input
							required={true}
							placeholder={'Введите вашу почту'}
							htmlFor={'email'}
							onChange={handleEmailChange}
						/>
					</Label>

					<Label htmlFor={'password'}>
						Пароль
						<Input
							required={true}
							placeholder={'Введите пароль'}
							htmlFor={'password'}
							type={'password'}
							onChange={handlePasswordChange}
						/>
					</Label>

					<Button methodApi = {'registration'}>Зарегистрироваться</Button>
					{!dataResult ? <p>Аккаунт существует</p> : null}
				</div>

				<IsAccount isAccountText={'Уже есть аккаунт?'} actionText={'Войти'} />
			</form>
		</main>
	)
}

export default Registration
