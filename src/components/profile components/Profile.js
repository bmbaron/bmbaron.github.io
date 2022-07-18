import React from 'react'
import profilePic from '../images/ben baron.jpeg'
import Calendar from './Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Profile(props) {
	return (
		<div className="profile">
			<div className="profile-pic-container">
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
		</div>
		<Calendar />
		<div className="fact-container">
			<h2>quick facts</h2>
			<ul className="fact-list">
				<li className="fact"> - BS in biomedical engineering</li>
				<li className="fact"> - self-taught web developer</li>
				<li className="fact"> - based in Vietnam</li>
				<li className="fact"> - able to work remotely</li>
			</ul>
		</div>
	</div>
	)
}

