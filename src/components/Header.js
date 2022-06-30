import React from 'react'
export default function Header(props) {
	return (
		<header className="header">
			<div className="name">
				<input className="searchbox" placeholder="Search or jump to..."></input>
				<ul className="links">
					<li className="link">Pulls</li>
					<li className="link">Issues</li>
					<li className="link">Marketplace</li>
					<li className="link">Explore</li>
				</ul>
				<div className="icon-container">
					<img src="*" className="icon"></img>
					<img src="*" className="icon"></img>
					<img src="*" className="icon"></img>
				</div>
			</div>
		</header>
	)
}

