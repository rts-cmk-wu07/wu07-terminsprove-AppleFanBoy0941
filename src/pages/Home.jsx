import { Link } from 'react-router-dom'
import ClassCardLarge from '../components/cards/ClassCardLarge'
import ClassesList from '../components/cards/ClassesList'
import useAxios from '../hooks/useAxios'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Home() {
	useDocumentTitle('Home – Fitness Verden')
	return (
		<div className='px-6 pb-8 flex flex-col gap-2'>
			<ClassCardLarge />
			<ClassesList title='Classes for you' />
		</div>
	)
}
