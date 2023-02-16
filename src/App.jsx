import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import Welcome from './pages/Welcome'
import Search from './pages/Search'
import TokenContext from './contexts/TokenContext'
import Class from './pages/Class'
import Schedule from './pages/Schedule'
import refreshToken from './utils/refreshToken'

function App() {
	const [token, setToken] = useState({
		token: '',
		userId: '',
		validUntil: '',
	})

	useEffect(() => {
		refreshToken(setToken)
	}, [])

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
				{
					path: '/search',
					element: <Search />,
				},
				{
					path: '/classes/:id',
					element: <Class />,
				},
				{
					path: '/schedule',
					element: <Schedule />,
				},
			],
		},
	])
	return (
		<TokenContext.Provider value={{ token, setToken }}>
			<RouterProvider router={router} />
		</TokenContext.Provider>
	)
}

export default App
