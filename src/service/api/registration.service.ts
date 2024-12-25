import { send } from './send.service';

export async function registration(login: string, password: string, email: string) {
	return await send({ method: 'registration', login, password, email });
}
