import { Link } from 'react-router-dom'
import InlineLoader from './loaders/InlineLoader'

export default function ClassicButton({
	label,
	loading,
	link,
	color = 'primary',
	...props
}) {
	if (link) {
		return (
			<Link
				to={link}
				{...props}
				className={`py-3 text-base ${
					color === 'primary'
						? 'bg-primary text-background'
						: color === 'elevated'
						? 'bg-elevated text-text'
						: 'bg-transparent text-primary'
				} w-full flex justify-center items-center rounded-xl h-16 gap-2`}
			>
				{label}
			</Link>
		)
	}
	return (
		<button
			{...props}
			className={`py-3 text-base ${
				color === 'primary'
					? 'bg-primary text-background'
					: color === 'elevated'
					? 'bg-elevated text-text'
					: 'bg-transparent text-primary'
			} w-full flex justify-center items-center rounded-xl h-16 gap-2`}
			disabled={loading}
		>
			{loading ? <InlineLoader /> : label}
		</button>
	)
}
