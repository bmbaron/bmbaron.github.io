import React from 'react'

export default function Project(props) {
	

	return (
		<div className="project">
			<img name={props.name} alt={props.name} src={props.src} title="description" width="90%"></img>
			<a href={props.github} target={props.github} className="project-link">{props.name}</a>
		</div>
	)
}
