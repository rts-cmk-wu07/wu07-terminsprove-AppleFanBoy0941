import TokenContext from '../contexts/TokenContext'
import { useContext, useEffect } from 'react'
import useAxios from '../hooks/useAxios'
import ScheduleList from '../components/cards/ScheduleList'
import { useNavigate } from 'react-router-dom'

export default function Schedule() {
	const { token } = useContext(TokenContext)

	const navigate = useNavigate()

	const { data, loading, error } = useAxios(`users/${token.userId}`)

	const schedule = data?.classes

	// useEffect(() => {
	// 	if (!token.token) navigate('/')
	// }, [])

	return (
		<div className='px-6'>
			<h1 className='text-xl mb-6'>My Schedule</h1>
			<ScheduleList schedule={schedule} loading={loading} />
		</div>
	)
}
