import { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function ClassCardLarge() {
	const [highlightedClass, setHighlightedClass] = useState(null)
	const [data, loading, error] = useAxios('classes', true)

	const navigate = useNavigate()

	// TODO: Add loading and error states for this component

	useEffect(() => {
		if (!data) return

		setHighlightedClass(data[Math.floor(Math.random() * data.length)])

		//! This can probably be removed later
		// axios.get(highlightedClass?.asset.url)
	}, [data])
	return (
		<div
			onClick={() => navigate(`/classes/${highlightedClass?.id}`)}
			className='aspect-card bg-elevated w-full rounded-2xl shadow-xl overflow-hidden relative mb-6'
		>
			<img src={highlightedClass?.asset?.url} className='h-full object-cover' />
			<div className='absolute top-0 left-0 w-full h-full px-6 py-12 flex flex-col justify-end items-end leading-none bg-gradient-to-t from-text/25 to-text/10'>
				<h1 className='text-2xl text-white'>
					<Link to={`/classes/${highlightedClass?.id}`}>
						{highlightedClass?.className}
					</Link>
				</h1>
			</div>
		</div>
	)
}
