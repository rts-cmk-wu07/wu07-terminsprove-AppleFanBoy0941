import { useState } from 'react'
import { Link } from 'react-router-dom'
import ClassesList from '../components/cards/ClassesList'
import TrainersList from '../components/cards/TrainersList'
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
			<div className='flex flex-col gap-6'>
				<ClassesList
					title={search !== '' ? 'Searched Classes' : 'Popular Classes'}
					filter={search}
				/>
				<TrainersList
					title={search !== '' ? 'Searched Trainers' : 'Popular Trainers'}
					filter={search}
				/>
			</div>
		</div>
	)
}
