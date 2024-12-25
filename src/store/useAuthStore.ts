import { create } from 'zustand';


interface IauthStoreProps {
	error: string
	userLogin: string
	userPassword: string
	userEmail: string
	dataResult: boolean
	changeError: (err: string) => void 
	changeLogin: (login: string) => void,
	changePassword: (password: string) => void,
	changeEmail: (email: string) => void,
	changeDataResult: (result: boolean) => void
}

export const useAuthStore = create<IauthStoreProps>((set) => ({
	error: '',
	userLogin: '',
	userPassword: '',
	userEmail: '',

	dataResult: true,


	changeError: (err) => set({error: err}),
	changeLogin: (login) => set({userLogin: login}),
	changePassword: (password) => set({userPassword: password}),
	changeEmail: (email) => set({userEmail: email}),
	changeDataResult: (result) => set({dataResult: result})
}))