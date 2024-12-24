import React, { lazy } from 'react'
const LazyCounter = lazy(() => import('./counter'))
import classes from '../extra-code/mimo.module.scss'
import { Outlet } from 'react-router-dom'

export const App = () => {
	return (
		<>
			<div className={classes.kik}>React Classes</div>
			<LazyCounter />
			<Outlet />
		</>
	)
}
