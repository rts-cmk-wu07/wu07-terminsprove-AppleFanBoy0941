import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function Navigation() {
	const routes = createBrowserRouter([
		{
			path: '/',
			component: () => <div>Home</div>,
		},
		{
			path: '/about',
			component: () => <div>About</div>,
		},
	])

	return <RouterProvider routes={routes} />
}
