import { FC } from 'react'
import st from './underTitle.module.css'

interface IUnderTitle {
	underTitle: string
}

export const UnderTitle: FC<IUnderTitle> = ({ underTitle }) => {
	return <p className={`${st.underTitle} ${st.marginTop}`}>{underTitle}</p>
}
