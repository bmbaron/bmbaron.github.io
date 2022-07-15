import React, {useState} from 'react'
import ColonyMaker from './colonyMaker'
import petriDish from '../images/petri dish.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function Game() {
	const [score, setScore] = useState(1)
	const [gameOver, setGameOver] = useState(false)


	function updateScore() {
		setScore(prevScore => {
			prevScore + 1 === 9 && 
				setGameOver(true)

			return prevScore + 1
		})
	}

	return (
		<div className="game-container">
			<h2>Click on the bacteria to feed them</h2>
			<h3>Grow 256 bacteria to finish the experiment</h3>
			<div className="game-board" style={{backgroundImage: `url("${petriDish}")`}}>
				<div className="bacteria-area">
					<ColonyMaker score={score} updateScore={updateScore} gameOver={gameOver} />
				</div>
				{gameOver &&
					<FontAwesomeIcon icon={faCheckCircle} className="flask"/>
				}
			</div>
		</div>


	)
}