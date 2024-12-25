import { FC } from 'react'
import st from './inputFile.module.css'

interface ItextAreaProps {
	placeholder?: string
	required?: boolean
	className?: string
	disabled?: boolean
	htmlFor?: string
}

export const InputFile: FC<ItextAreaProps> = ({htmlFor}) => {
	return (
		<div className={st.customInputFileBlock}>
			<span className={st.customText}>Загрузить фото</span>
			<div className={st.backgroundForInput}></div>
			<input type="file" className={st.inputFile} id={htmlFor}/>
		</div>
	);
}
 