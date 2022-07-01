import React from 'react'
import Project from './Project'
export default function Projects(props) {
	let projects = Array(3).fill(0)

	projects = projects.map((project) => {
		return <Project />
	})

	console.log(projects)

	return (
		<div className="projects">
			{projects}
		</div>
	)
}
