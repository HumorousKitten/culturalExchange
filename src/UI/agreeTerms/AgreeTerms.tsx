import { Input } from '../input/Input'
import { Label } from '../label/Label'
import st from './agreeTerm.module.css'

export const AgreeTerms = () => {
	return (
		<Label htmlFor='agreeTerm'>
			<Input type='checkbox' required={true} htmlFor='agreeTerm' />
			<p className={st.agreeTermText}>
				Согласен с <span className={st.textDecor}>условиями</span>
			</p>
		</Label>
	)
}
