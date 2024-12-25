import { TvalidateLogin } from '../../types/types'

export function validateLogin(login: string): TvalidateLogin {
	
	if (login.length < 5 || login.length > 18) {
			return 'Имя должно быть от 8 до 18 символов'
	}

	if (!/^[a-zA-Z0-9]+$/.test(login)) {
			return 'Имя должно содержать только английские буквы и цифры'
	}

	if (!/[A-Z]/.test(login)) {
			return 'Имя должно содержать хотя бы одну заглавную букву'
	}

	if (!/[0-9]/.test(login)) {
			return 'Имя должно содержать хотя бы одну цифру'
	}

	return 'Имя валидно'
}
