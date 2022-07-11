import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Header(props) {
	return (
		<header className="header">
			<div className="name">
				<FontAwesomeIcon icon={faGithub} className="icon" size="2x"/>	
				<input className="searchbox" placeholder="Search or jump to..."></input>
				<ul className="links">
					<li className="link">Pull Requests</li>
					<li className="link">Issues</li>
					<li className="link">Marketplace</li>
					<li className="link">Explore</li>
				</ul>
				<div className="icon-container">
					<FontAwesomeIcon icon={faBell} className="icon"/>	
					<FontAwesomeIcon icon={faPlus} className="icon"/>	
					<FontAwesomeIcon icon={faCircle} className="icon"/>	
				</div>
			</div>
		</header>
	)
}

