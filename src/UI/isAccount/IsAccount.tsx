import { FC } from 'react'
import st from './isAccount.module.css'


interface IsAccountPropsInterface {
	isAccountText: string
	actionText: string
	onClick?: (e: any) => void
}

export const IsAccount: FC<IsAccountPropsInterface> = ({ isAccountText, actionText, onClick }) => {
	return (
		<p className={st.isAccount}>
			{isAccountText}
			<span onClick={onClick} className={`${st.actionText} ${st.ml}`}>{actionText}</span>
		</p>
	)
}
