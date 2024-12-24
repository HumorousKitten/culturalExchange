import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Registration from '../pages/registration/Registration'
// import Auth from '../pages/auth/Auth'


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Registration />,
	},

	{
		path: '/registration',
		element: <Registration />,
	},

	// {
	// 	path: '/auth',
	// 	element: <Auth />,
	// },
])
