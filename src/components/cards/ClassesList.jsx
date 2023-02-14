import useAxios from '../../hooks/useAxios'
import ClassesCard from './ClassesCard'

export default function ClassesList({ title }) {
	const [data, loading, error] = useAxios('classes', true)

	console.log(data)

	return (
		<div className='w-[calc(100vw-24px)]'>
			<h1 className='text-lg my-2'>{title}</h1>
			<ul className='flex gap-4 overflow-x-scroll'>
				{Object.keys(data).length > 0
					? data.map(item => <ClassesCard key={item.id} item={item} />)
					: null}
			</ul>
		</div>
	)
}
