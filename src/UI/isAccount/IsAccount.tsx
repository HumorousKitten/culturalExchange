import { FC } from 'react'
import st from './isAccount.module.css'
import { Link } from 'react-router-dom'

interface IsAccountPropsInterface {
	isAccountText: string
	actionText: string
}

export const IsAccount: FC<IsAccountPropsInterface> = ({ isAccountText, actionText}) => {
	return (
		<p className={st.isAccount}>
			{isAccountText}
			<Link className={`${st.actionText} ${st.ml}`} to={actionText === 'Войти' ?'/auth' : '/registration'}>{actionText}</Link>
		</p>
	)
}
