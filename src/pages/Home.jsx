import { Link } from 'react-router-dom'
import ClassCardLarge from '../components/cards/ClassCardLarge'
import ClassesList from '../components/cards/ClassesList'
import useAxios from '../hooks/useAxios'

export default function Home() {
	return (
		<div className='px-6 pb-8 flex flex-col gap-2'>
			<ClassCardLarge />
			<ClassesList title='Classes for you' />
		</div>
	)
}
