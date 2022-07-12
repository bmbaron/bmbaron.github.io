import React from 'react'
export default function Project(props) {

	return (
		<div className="project">
			<iframe name={props.name} src={props.src} title="description" width="90%" height="300px"></iframe>
			<a href={props.src} target={props.name} className="project-link">{props.name}</a>
		</div>
	)
}
