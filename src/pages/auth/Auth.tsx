import { Button } from '../../UI/button/Button'
import { Input } from '../../UI/input/Input'
import { IsAccount } from '../../UI/isAccount/IsAccount'
import { Label } from '../../UI/label/Label'
import { MainTitle } from '../../UI/mainTitle/MainTitle'
import { UnderTitle } from '../../UI/underTitle/UnderTitle'
import st from './auth.module.css'

const Auth = () => {
	return (
		<main>
			<form className={`${st.wrapper} ${st.form}`}>
				<MainTitle title={'Добро пожаловать'} />
				<UnderTitle
					underTitle={'Введите свои данные для входа в учетную запись'}
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

					<Label htmlFor={'password'}>
						Пароль
						<Input
							required={true}
							placeholder={'Введите пароль'}
							htmlFor={'password'}
						/>
					</Label>

					<Button>Войти</Button>
				</div>

				<IsAccount isAccountText={'Еще нет аккаунта?'} actionText={'Создайте'} />
			</form>
		</main>
	)
}

export default Auth
