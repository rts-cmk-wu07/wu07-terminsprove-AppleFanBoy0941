import useAxios from '../../hooks/useAxios'
import ClassesCard from './ClassesCard'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function ClassesList({ title, filter }) {
	const { data, loading, error } = useAxios('classes', true)

	function filterClasses() {
		if (filter === '') return data

		const importance = {
			className: 3,
			trainer: 2,
			classDescription: 1,
			classDay: 1,
			classTime: 1,
		}

		const filtered = data.filter(item => {
			let score = 0
			Object.keys(importance).forEach(key => {
				if (key === 'trainer') {
					if (item.trainer.trainerName.toLowerCase().includes(filter)) {
						score += importance[key]
					}
				} else {
					if (item[key].toLowerCase().includes(filter)) {
						score += importance[key]
					}
				}
			})
			return score > 0
		})

		const sorted = filtered.sort((a, b) => a - b)

		return sorted
	}

	useEffect(() => {
		console.log(filterClasses())
	}, [filter])

	// TODO: Add loading and error states for this component

	return (
		<div className='w-screen -ml-6 relative overflow-hidden'>
			<motion.h1
				key={title}
				initial={{ y: 8, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className='text-lg my-2 px-6'
			>
				{title}
			</motion.h1>
			<motion.ul
				whileInView={{
					x: [0, 12, 0],
					transition: {
						delay: 1.5,
						duration: 1,
						ease: 'backInOut',
					},
				}}
				viewport={{ once: true }}
				className=' relative flex gap-4 overflow-x-scroll scrollbar-hide px-6'
			>
				{filterClasses().length > 0 ? (
					filterClasses().map(item => <ClassesCard key={item.id} item={item} />)
				) : (
					<p className='text-base'>
						Your search did not give any results. Try to search for something
						else.
					</p>
				)}
			</motion.ul>
			<div className='absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-background/50 to-background/0'></div>
			<div className='absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-background/50 to-background/0'></div>
		</div>
	)
}
