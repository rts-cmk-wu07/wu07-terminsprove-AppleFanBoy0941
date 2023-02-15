import useAxios from '../../hooks/useAxios'
import ClassesCard from './ClassesCard'
import { motion } from 'framer-motion'

export default function ClassesList({ title }) {
	const { data, loading, error } = useAxios('classes', true)

	// TODO: Add loading and error states for this component

	return (
		<div className='w-screen -ml-6 relative overflow-hidden'>
			<h1 className='text-lg my-2 px-6'>{title}</h1>
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
				{Object.keys(data).length > 0
					? data.map(item => <ClassesCard key={item.id} item={item} />)
					: null}
			</motion.ul>
			<div className='absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-background/50 to-background/0 z-50'></div>
			<div className='absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-background/50 to-background/0 z-50'></div>
		</div>
	)
}
