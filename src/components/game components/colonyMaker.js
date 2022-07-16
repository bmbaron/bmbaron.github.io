import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacterium } from '@fortawesome/free-solid-svg-icons'

export default function Game(props) {
	const generations = [1,1,2,4,8,14,34,68,124]
	let containerStyle

	const bacteria = [];
	for (let i = 0; i < props.score; i += 1) {
		for(let j = 0; j < generations[i]; j += 1) {
			if (generations[i] === 14) {
				containerStyle = { "width": "150px", "--width": "150px"}
			}
			if (generations[i] === 34) {
				containerStyle = { "width": "200px", "--width": "200px"}
			}
			if (generations[i] === 68) {
				containerStyle = { "width": "275px", "--width": "275px"}
			}
			if (generations[i] === 124) {
				containerStyle = { "width": "400px", "--width": "400px"}
			}
			bacteria.push(<FontAwesomeIcon
				icon={faBacterium}
				className="bacteria rotating"
				onClick={props.updateScore}
				style={{
					pointerEvents: props.gameOver ? 'none' : 'auto',
					display: 'auto'
				}}
				/>
			)
		}
	}

	return (
		<div className="bacteria-container" style={containerStyle}>
			{bacteria}
		</div>
	)
}