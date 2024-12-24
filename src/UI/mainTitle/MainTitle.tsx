import { FC } from 'react'
import st from './mainTitle.module.css'

interface IMainTitle {
	title: string
}

export const MainTitle: FC<IMainTitle> = ({title}) => {
	return (
		<h1 className={st.title}>{title}</h1>
	);
}
 
