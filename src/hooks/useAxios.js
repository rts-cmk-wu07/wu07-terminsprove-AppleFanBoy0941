import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import TokenContext from '../contexts/TokenContext'
import { default as refreshTokenFunction } from '../utils/refreshToken'

export default function useAxios(endpoint, noToken, fullUrl = false) {
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const { token, setToken } = useContext(TokenContext)

	const { accessToken } = token

	useEffect(() => {
		if (!accessToken && !noToken) return
		if (!endpoint) return

		refreshTokenFunction(setToken)

		axios
			.get(`${!fullUrl && import.meta.env.VITE_API_URL}${endpoint}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then(response => {
				if (response.status >= 200 && response.status < 300) {
					setData(response.data)
					setLoading(false)
				} else {
					setError(response.status)
				}
			})
	}, [endpoint, accessToken, setToken])

	return [data, loading, error]
}
