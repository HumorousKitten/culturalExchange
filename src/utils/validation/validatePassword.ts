import { TvalidatePassword } from '../../types/types';

export function validatePassword(password: string): TvalidatePassword {

  if (password.length < 5 || password.length > 22) {
    return 'Пароль должен быть от 5 до 22 символов';
  }

  if (!/[A-Z]/.test(password)) {
    return 'Пароль должен содержать хотя бы одну заглавную букву';
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Пароль должен содержать хотя бы один спецсимвол';
  }

  if (!/[0-9]/.test(password)) {
    return 'Пароль должен содержать хотя бы одну цифру';
  }

  return 'Пароль валиден';
}