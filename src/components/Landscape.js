import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export default function Landscape(props) {
	const [time, setTime] = useState(Date.now());

	useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), 8000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	function getRandomNum() {
		return Math.random()* 1.5 + 1;
	}

	function getRandomNum2() {
		return Math.random()* 1 + 0.5;
	}

	const template = new Array(15).fill()

	const buildings = template.map(() => {
		return (
			<FontAwesomeIcon
			  key={time*Math.random()}
				icon={faBuilding}
				className="building"
				style={{
					transform: `scale(1, ${getRandomNum()})`,
					opacity: `${getRandomNum2()}`
				}}
			/>
		)
	})

	return (
		<>
			<h1 className="greeting">welcome</h1>
			<FontAwesomeIcon icon={faSun} className="sun rotating-sun" />
			<div className="cloud-container">
				<FontAwesomeIcon icon={faCloud} className="cloud" />
				<FontAwesomeIcon icon={faCloud} className="cloud moving-cloud" style={{paddingTop: '2rem'}} />
			</div>
			<div className="building-container">
				{buildings}
			</div>
			<h4>copyright © Ben Baron 2022</h4>
		</>
	)
}