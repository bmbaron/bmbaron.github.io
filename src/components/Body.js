import React from 'react'
import Profile from './Profile'
import Projects from './Projects'

export default function Body(props) {
	return (
		<div className="body">
			<Profile />
			<Projects />
		</div>
	)
}

