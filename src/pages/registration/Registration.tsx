import { AgreeTerms } from '../../UI/agreeTerms/AgreeTerms'
import { Button } from '../../UI/button/Button'
import { Input } from '../../UI/input/Input'
import { IsAccount } from '../../UI/isAccount/IsAccount'
import { Label } from '../../UI/label/Label'
import { MainTitle } from '../../UI/mainTitle/MainTitle'
import { UnderTitle } from '../../UI/underTitle/UnderTitle'
import st from './registration.module.css'

const Registration = () => {
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
						/>
					</Label>

					<Label htmlFor={'email'}>
						Электронная почта
						<Input
							required={true}
							placeholder={'Введите вашу почту'}
							htmlFor={'email'}
						/>
					</Label>

					<Label htmlFor={'password'}>
						Пароль
						<Input
							required={true}
							placeholder={'Введите пароль'}
							htmlFor={'password'}
						/>
					</Label>

					<AgreeTerms />

					<Button>Зарегистрироваться</Button>
				</div>

				<IsAccount isAccountText={'Уже есть аккаунт?'} actionText={'Войти'} />
			</form>
		</main>
	)
}

export default Registration
