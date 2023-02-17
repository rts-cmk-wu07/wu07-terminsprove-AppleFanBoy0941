import TokenContext from '../contexts/TokenContext'
import { useContext, useEffect } from 'react'
import useAxios from '../hooks/useAxios'
import ScheduleList from '../components/cards/ScheduleList'
import { useNavigate } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Schedule() {
	useDocumentTitle('Schedule')
	const { token } = useContext(TokenContext)

	const navigate = useNavigate()

	const { data, loading } = useAxios(`users/${token.userId}`)

	const schedule = data?.classes

	// useEffect(() => {
	// 	if (!token.token) navigate('/')
	// }, [])

	return (
		<div className='px-6'>
			<h1 className='text-xl mb-6'>My Schedule</h1>
			<ScheduleList schedule={schedule} loading={loading} />
			{!loading && !token.token && (
				<div className='text-center'>
					<p className='text-sm text-gray-500'>
						You are not logged in. Please log in to see your schedule.
					</p>
				</div>
			)}
		</div>
	)
}
