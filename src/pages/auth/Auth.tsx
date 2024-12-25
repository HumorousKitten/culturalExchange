import { useAuthStore } from '../../store/useAuthStore'
import { Button } from '../../UI/button/Button'
import { Input } from '../../UI/input/Input'
import { IsAccount } from '../../UI/isAccount/IsAccount'
import { Label } from '../../UI/label/Label'
import { MainTitle } from '../../UI/mainTitle/MainTitle'
import { UnderTitle } from '../../UI/underTitle/UnderTitle'
import { validateEmail } from '../../utils/validation/validateEmail'
import { validatePassword } from '../../utils/validation/validatePassword'
import st from './auth.module.css'

const Auth = () => {
	const {changeEmail, changePassword, dataResult} = useAuthStore()
	

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
				<MainTitle title={'Добро пожаловать'} />
				<UnderTitle
					underTitle={'Введите свои данные для входа в учетную запись'}
				/>

				<div className={st.formInputs}>
					<Label htmlFor={'email'}>
						Электронная почта
						<Input
							required={true}
							placeholder={'Введите электронную почту'}
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
							onChange={handlePasswordChange}
						/>
					</Label>

					<Button methodApi = {'auth'}>Войти</Button>
					{!dataResult ? <p>Аккаунт не найден</p> : null}
				</div>

				<IsAccount isAccountText={'Еще нет аккаунта?'} actionText={'Создайте'} />
			</form>
		</main>
	)
}

export default Auth
