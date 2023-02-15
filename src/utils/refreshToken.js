import { getCookie } from 'react-use-cookie'

async function refreshToken(setTokenData) {
	const tokenDataFromCookie = getCookie('token')

	if (tokenDataFromCookie) {
		console.log('tokenDataFromCookie', tokenDataFromCookie)
		const tokenDataFromCookieParsed = JSON.parse(tokenDataFromCookie)
		setTokenData(tokenDataFromCookieParsed)
	}
}

export default refreshToken
