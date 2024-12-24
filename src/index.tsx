import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React, { lazy } from 'react'

const root = document.getElementById('root')

if (!root) {
	throw new Error('root does not found')
}

document.addEventListener('DOMContentLoaded', () => {
	let InitToDoList = require('./extra-code/to-do-list')
	InitToDoList()
	let a = 1
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: <h1>About</h1>,
			},
			{
				path: '/shop',
				element: <h1>Shop</h1>,
			},
		],
	},
])

const container = createRoot(root)

container.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
