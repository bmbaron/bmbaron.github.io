import React from 'react'
import Project from './Project'
import projectData from '../data/projectData.js'
import homestayImage from '../images/thohomestay.png'
import todoImage from '../images/todolist.png'
import airqualityImage from '../images/airquality.png'

export default function Projects(props) {
	let projects = projectData

	let importedImages = [homestayImage, todoImage, airqualityImage]

	projects = projects.map((project, index) => {
		return <Project name={project.name} key={Math.random()} src={importedImages[index]} github={project.github}/>
	})

	return (
		<div className="projects">
			<h1 className="projects-label">Projects</h1>
			{projects}
		</div>
	)
}
