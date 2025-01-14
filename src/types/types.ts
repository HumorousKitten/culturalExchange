export type TvalidatePassword = 
  | 'Пароль должен быть от 5 до 22 символов'
  | 'Пароль должен содержать хотя бы одну заглавную букву'
  | 'Пароль должен содержать хотя бы один спецсимвол'
  | 'Пароль должен содержать хотя бы одну цифру'
  | 'Пароль валиден';

export type TvalidateLogin = 'Имя должно быть от 8 до 18 символов' | 'Имя должно содержать только английские буквы и цифры' | 'Имя должно содержать хотя бы одну заглавную букву' | 'Имя должно содержать хотя бы одну цифру' | 'Имя валидно'

