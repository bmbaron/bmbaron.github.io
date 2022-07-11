import React from 'react'
import profilePic from '../images/ben baron.jpeg'
import Calendar from './Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Profile(props) {
	return (
		<div className="profile">
			<img className="profile-pic" src={profilePic} alt="Ben Baron"></img>
			<h2>Ben Baron</h2>
			<h3>Front-end Web Developer</h3>
			<div className="social-links">
				<a href="mailto:benjamin.m.baron@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} size="3x" color="orange" className="icon"/>	
				</a>
				<a href="https://github.com/bmbaron">
					<FontAwesomeIcon icon={faGithub} size="3x" color="orange" className="icon"/>	
				</a>
				<a href="https://www.linkedin.com/in/benjamin-baron-850b264a/">
					<FontAwesomeIcon icon={faLinkedin} size="3x" color="orange" className="icon"/>					
				</a>
			</div>
			<Calendar />
		</div>
	)
}

