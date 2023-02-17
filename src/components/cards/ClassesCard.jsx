import axios from 'axios'
import useAxios from '../../hooks/useAxios'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Ratings from '../../templates/Ratings'

export default function ClassesCard({ item }) {
	const navigate = useNavigate()

	//? Could this be better? Images are too large, and text aswell, but makes no sense to make i smaller

	// TODO: Add loading and error states for this component

	return (
		<div
			onClick={() => navigate(`/classes/${item.id}`)}
			className='w-40 flex-shrink-0'
		>
			<img
				src={item?.asset.url}
				alt={item?.className}
				className='aspect-card object-cover w-full rounded-xl'
			/>
			<Link
				to={`/classes/${item.id}`}
				className='block text-base w-40 overflow-hidden text-ellipsis whitespace-nowrap mt-2'
			>
				{item.className}
			</Link>
			{/* // TODO: Add star ratings here */}
			<Ratings classData={item} showAverage={false} size='sm' />
		</div>
	)
}
