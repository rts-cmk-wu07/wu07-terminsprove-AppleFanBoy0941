import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import TokenContext from '../contexts/TokenContext'
import { default as refreshTokenFunction } from '../utils/refreshToken'

export default function useAxios(endpoint, noToken, fullUrl = false) {
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const { token, setToken } = useContext(TokenContext)

	const { token: accessToken } = token

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

	async function getData() {
		if (!accessToken && !noToken) return
		if (!endpoint) return

		setLoading(true)

		refreshTokenFunction(setToken)

		const response = await axios.get(
			`${!fullUrl && import.meta.env.VITE_API_URL}${endpoint}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		if (response.status >= 200 && response.status < 300) {
			setData(response.data)
			setLoading(false)
		} else {
			setError(response.status)
		}
	}

	async function postData(data, additionalEndpoint = '') {
		if (!accessToken && !noToken) return
		if (!endpoint) return

		setLoading(true)

		refreshTokenFunction(setToken)

		const response = await axios.post(
			`${
				!fullUrl && import.meta.env.VITE_API_URL
			}${endpoint}${additionalEndpoint}`,
			data,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		if (response.status >= 200 && response.status < 300) {
			setData(response.data)
			setLoading(false)
		} else {
			setError(response.status)
			console.log(response)
		}
	}

	async function deleteData(additionalEndpoint = '') {
		if (!accessToken && !noToken) return
		if (!endpoint) return

		setLoading(true)

		refreshTokenFunction(setToken)

		const response = await axios.delete(
			`${
				!fullUrl && import.meta.env.VITE_API_URL
			}${endpoint}${additionalEndpoint}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		if (response.status >= 200 && response.status < 300) {
			setData(response.data)
			setLoading(false)
		} else {
			setError(response.status)
		}
	}

	async function patchData(data, additionalEndpoint = '') {
		if (!accessToken && !noToken) return
		if (!endpoint) return

		setLoading(true)

		refreshTokenFunction(setToken)

		const response = await axios.patch(
			`${
				!fullUrl && import.meta.env.VITE_API_URL
			}${endpoint}${additionalEndpoint}`,
			data,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		if (response.status >= 200 && response.status < 300) {
			setData(response.data)
			setLoading(false)
		} else {
			setError(response.status)
		}
	}

	return { data, loading, error, getData, deleteData, postData, patchData }
}
