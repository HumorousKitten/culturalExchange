import { Button } from '../../UI/button/Button'
import { Input } from '../../UI/input/Input'
import { IsAccount } from '../../UI/isAccount/IsAccount'
import { Label } from '../../UI/label/Label'
import { MainTitle } from '../../UI/mainTitle/MainTitle'
import { TextArea } from '../../UI/textArea/TextArea'
import { InputFile } from '../../UI/inputFile/InputFile'
import st from './profilePage.module.css'

import React from 'react'



const ProfilePage = () => {
	

	return (
		<main>
			<form className={`${st.wrapper} ${st.form}`}>
				<MainTitle title={'Теперь'} />
				<MainTitle title={'создадим профиль'} />

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
						Культура
						<Input
							required={true}
							placeholder={'Введите вашу почту'}
							htmlFor={'email'}
						/>
					</Label>

					<Label htmlFor={'interests'}>
						Интересы
						<TextArea htmlFor={'interests'} placeholder={'Расскажите о ваших интересах'}/> 
					</Label>

					<Label htmlFor={'photoProfile'}>
						Фотография профиля
						<InputFile htmlFor={'photoProfile'}/> 
					</Label>
					
					<Button>Сохранить профиль</Button>
				</div>

			</form>
		</main>
	)
}

export default ProfilePage
