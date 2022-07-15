import React from 'react'
import Project from './Project'
import projectData from '../data/projectData.js'
export default function Projects(props) {
	let projects = projectData

	projects = projects.map((project) => {
		return <Project name={project.name} src={project.src}/>
	})

	return (
		<div className="projects">
			<h1 className="projects-label">Projects</h1>
			{projects}
		</div>
	)
}
