import React from 'react'
import Counter from './counter'
import classes from '@extra-code/mimo.module.scss'
import pngeshka from '@assets/png-svgrepo-com.png'

import { Outlet } from 'react-router-dom'

export const MainPage = () => {
	return (
		<>
			<div className={classes.kik}>React Classes</div>
			<img src={pngeshka} alt='///' />
			<Counter />
			<Outlet />
		</>
	)
}
