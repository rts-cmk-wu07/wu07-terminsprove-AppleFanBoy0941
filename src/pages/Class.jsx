import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'
import ClassHeader from '../templates/ClassHeader'
import ClassDetails from '../templates/ClassDetails'

export default function Class() {
	const { id } = useParams()
	const [data, loading, error] = useAxios(`classes/${id}`, true)

	console.log(data)

	return (
		<div>
			<ClassHeader classData={data} />
			<ClassDetails classData={data} />
		</div>
	)
}
