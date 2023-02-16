import { motion } from 'framer-motion'
import useAxios from '../../hooks/useAxios'
import TrainersCard from './TrainersCard'

export default function TrainersList({ title, filter, trainer }) {
	const { data, loading, error } = useAxios('trainers', true)

	function filteredTrainers() {
		if (!data || Object.keys(data).length < 1) return
		if (filter === '') return data

		if (trainer) return data.filter(t => t.id === trainer)

		const filtered = data?.filter(trainer => {
			const name = trainer.trainerName.toLowerCase()
			return name.includes(filter)
		})

		return filtered
	}

	return (
		<div>
			<motion.h1
				key={title}
				initial={{ y: 8, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className='text-lg my-2'
			>
				{title}
			</motion.h1>
			<ul className='flex flex-col gap-4'>
				{filteredTrainers()?.length > 0 ? (
					filteredTrainers().map(trainer => {
						return <TrainersCard trainer={trainer} key={trainer.id} />
					})
				) : (
					<p className='text-base text-primary'>
						Your search did not give any results. Try to search for something
						else.
					</p>
				)}
			</ul>
		</div>
	)
}
