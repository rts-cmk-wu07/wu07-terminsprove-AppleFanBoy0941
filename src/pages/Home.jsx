import { Link } from 'react-router-dom'
import ClassCardLarge from '../components/cards/ClassCardLarge'
import useAxios from '../hooks/useAxios'

export default function Home() {
	return (
		<div className='px-6'>
			<h1>Home</h1>
			<ClassCardLarge />
			<p>This is the home page.</p>
			<Link to='/search'>Search</Link>
		</div>
	)
}
