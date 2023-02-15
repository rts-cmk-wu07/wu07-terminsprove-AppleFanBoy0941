import useAxios from '../hooks/useAxios'
import Button from '../components/Button'
import TokenContext from '../contexts/TokenContext'
import { useContext } from 'react'

export default function ClassHeader({ classData }) {
	const { token } = useContext(TokenContext)

	const [data, loading, error] = useAxios(`users/${token.userId}`)

	return (
		<div className='-mt-20 aspect-card relative overflow-hidden'>
			<img
				className='h-full w-full object-cover'
				src={classData?.asset?.url}
				alt={classData?.className}
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-text/75 to-text/10 flex justify-between items-end py-6 pl-4 gap-2'>
				<div>
					<h1 className='text-background text-xl leading-none'>
						{classData?.className}
					</h1>
					{/* // TODO: ratings here */}
					{/* // ? Ville det være bedre at rykke title op over button, så ratings og button er på en linje, vil give mere plads til title */}
				</div>
				<Button xSize='sm'>Sign up</Button>
			</div>
		</div>
	)
}
