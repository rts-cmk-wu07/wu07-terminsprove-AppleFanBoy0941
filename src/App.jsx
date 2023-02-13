import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import Welcome from './pages/Welcome'

function App() {
	const [welcomeScreen, setWelcomeScreen] = useLocalStorage(
		'welcomeScreen',
		true
	)

	const router = createBrowserRouter([
		{
			element: !welcomeScreen ? <Layout /> : <Welcome />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
			],
		},
	])
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
