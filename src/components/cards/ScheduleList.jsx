import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import ScheduleLoader from '../loaders/ScheduleLoader'

export default function ScheduleList({ schedule, loading }) {
	const navigate = useNavigate()
	
	return (
		<motion.ul
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
			}}
			initial='hidden'
			animate='visible'
			className='flex flex-col gap-6'
		>
			{!loading ? (
				schedule?.map(item => (
					<motion.li
						key={item.id}
						variants={{
							hidden: { y: 24, opacity: 0 },
							visible: {
								y: 0,
								opacity: 1,
								transition: { type: 'spring', stiffness: 200, damping: 30 },
							},
						}}
						className='flex flex-col gap-2 border-b py-2 border-b-text border-dashed'
						onClick={() => navigate(`/classes/${item.id}`)}
					>
						<div className='flex items-center justify-between'>
							<p className='text-base'>{item.classDay}</p>
							<p className='text-base'>{item.classTime}</p>
						</div>
						<h2 className='text-lg'>
							<Link to={`/classes/${item.id}`}>{item.className}</Link>
						</h2>
					</motion.li>
				))
			) : (
				<>
					<motion.div
						variants={{
							hidden: { y: 24, opacity: 0 },
							visible: {
								y: 0,
								opacity: 1,
								transition: { type: 'spring', stiffness: 200, damping: 30 },
							},
						}}
					>
						<ScheduleLoader />
					</motion.div>
					<motion.div
						variants={{
							hidden: { y: 24, opacity: 0 },
							visible: {
								y: 0,
								opacity: 1,
								transition: { type: 'spring', stiffness: 200, damping: 30 },
							},
						}}
					>
						<ScheduleLoader />
					</motion.div>
				</>
			)}
		</motion.ul>
	)
}
