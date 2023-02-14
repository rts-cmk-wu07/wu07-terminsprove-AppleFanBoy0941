import axios from 'axios'
import { getCookie, setCookie } from 'react-use-cookie'

async function refreshToken(setTokenData) {
	const tokenDataFromCookie = getCookie('token')

	if (tokenDataFromCookie) {
		const tokenDataFromCookieParsed = JSON.parse(tokenDataFromCookie)

		const currentTime = Date.now()
		if (tokenDataFromCookieParsed.expiratedDate > currentTime) {
			setTokenData(tokenDataFromCookieParsed)
		} else {
			// axios
			// 	.post(
			// 		`${import.meta.env.VITE_AUTH_URL}token`,
			// 		JSON.stringify({
			// 			refresh_token: tokenDataFromCookieParsed.refreshToken,
			// 		})
			// 	)
			// 	.then(response => {
			// 		const resData = {
			// 			accessToken: response.data.access_token,
			// 			refreshToken: response.data.refresh_token
			// 				? response.data.refresh_token
			// 				: tokenDataFromCookieParsed.refreshToken,
			// 			expiratedDate:
			// 				new Date().getTime() + response.data.expires_in * 1000,
			// 		}
			// 		setTokenData(resData)
			// 		setCookie('tokenData', JSON.stringify(resData))
			// 	})
		}
	} else {
	}
}

export default refreshToken
