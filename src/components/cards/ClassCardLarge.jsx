import { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'
import axios from 'axios'

export default function ClassCardLarge() {
	const [highlightedClass, setHighlightedClass] = useState(null)
	const [data, loading, error] = useAxios('classes', true)

	console.log(highlightedClass)

	useEffect(() => {
		console.log(data)

		if (!data) return

		setHighlightedClass(data[Math.floor(Math.random() * data.length)])

		async function fetchImage() {
			if (!highlightedClass) return

			await axios.get(highlightedClass?.asset.url)
		}

		fetchImage()
	}, [data])
	return (
		<div className='aspect-card bg-slate-100 w-full rounded-2xl shadow-xl overflow-hidden relative mb-6'>
			<img src={highlightedClass?.asset?.url} className='h-full object-cover' />
			<div className='absolute top-0 left-0 w-full h-full px-6 py-12 flex flex-col justify-end items-end leading-none bg-gradient-to-t from-text/25 to-text/10'>
				<h1 className='text-2xl text-white'>{highlightedClass?.className}</h1>
			</div>
		</div>
	)
}
