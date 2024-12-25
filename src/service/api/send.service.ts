interface IParams {
	method?: 'login' | 'registration'
	email?: string
	login?: string
	password?: string
}

export async function send(params: IParams = {}) {
	const query = Object.keys(params)
		.map(key => {
			const paramKey = key as keyof IParams
			return `${paramKey}=${params[paramKey]}`
		})
		.join('&')
	const result = await fetch(`http://culturalexchange/?${query}`)
	const answer = await result?.json()
	return answer.result === 'ok' ? answer.data : null
}
