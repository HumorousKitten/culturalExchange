import { send } from './send.service';

export async function auth(email: string, password: string) {
	const data = await send({ method: 'login', email, password });
	if (data) {
		document.cookie = `token=${data.token}; path=/; max-age=3600`;
	}
	return data;
}
