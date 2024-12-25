import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Registration from '../pages/registration/Registration'
import Auth from '../pages/auth/Auth'
import ProfilePage from '../pages/profilePage/ProfilePage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Registration />,
	},

	{
		path: '/registration',
		element: <Registration />,
	},

	{
		path: '/auth',
		element: <Auth />,
	},

	{
		path: '/profile',
		element: <ProfilePage />,
	},
])
