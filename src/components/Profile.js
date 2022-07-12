import React from 'react'
import profilePic from '../images/ben baron.jpeg'
import kingfisher from '../images/low poly kingfisher.jpeg'
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
			<div className="fact-container">
				<h2>quick facts</h2>
				<ul className="fact-list">
					<li className="fact"> - BS in biomedical engineering</li>
					<li className="fact"> - self-taught web developer</li>
					<li className="fact"> - based in Vietnam</li>
					<li className="fact"> - able to work remotely</li>
				</ul>
			</div>
			<div className="kingfisher">
				<img id="kingfisher" className="kingfisher-pic" src={kingfisher} alt="low poly kingfisher"></img>
				<label HTMLFor="kingfisher">space-filling image by <a href="https://pixabay.com/users/manuchi-1728328/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3249914">Денис Марчук</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3249914">Pixabay</a></label>
			</div>
		</div>
	)
}

