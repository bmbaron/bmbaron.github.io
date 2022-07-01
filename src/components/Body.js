import React from 'react'
import Profile from './Profile'
import Projects from './Projects'
import Calendar from './Calendar'


export default function Body(props) {
	return (
		<div className="body">
			<Profile />
			<div className="body-right">
				<Projects />
				<Calendar />
			</div>
		</div>
	)
}

