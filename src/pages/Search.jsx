import { useState } from 'react'
import { Link } from 'react-router-dom'
import ClassesList from '../components/cards/ClassesList'
import Input from '../components/Input'

export default function Search() {
	const [search, setSearch] = useState('')
	return (
		<div className='px-6'>
			<h1 className='text-xl'>Search</h1>
			<Input
				placeholder='Search'
				search
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<ClassesList
				title={search !== '' ? 'Searched classes' : 'Popular classes'}
				filter={search}
			/>
		</div>
	)
}
