import React from 'react'
import profilePic from '../images/ben baron.jpeg'
export default function Profile(props) {
	return (
		<div className="profile">
			<img className="profile-pic" src={profilePic} alt="Ben Baron"></img>
		</div>
	)
}

