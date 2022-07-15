import React from 'react'
export default function CalendarSquares() {

	function getRandomNum() {
		return Math.floor(Math.random() * 3)
	}

	const emptyArray = new Array(52).fill(new Array(7).fill(0))
	const squareArray = emptyArray.map((col) => {
		return (col.map(() => getRandomNum())
		)
	})

	return (
		<div className="calendar-container">
			<h4 className="calendar-title">Vietnamese coffees drank in the last year</h4>
			<ul className="calendar-months">
				<li className="month">Jan</li>
				<li className="month">Apr</li>
				<li className="month">Jul</li>
				<li className="month">Oct</li>
			</ul>
			<div className="calendar">
				{squareArray.map((col, index) => {
					return (col.map((row, subIndex) => {
						let returnedSquare;
						if (squareArray[index][subIndex] === 0) {
							returnedSquare = <div className="square square-grey"></div>
						}
						else if (squareArray[index][subIndex] === 1) {
							returnedSquare = <div className="square square-light-green"></div>
						}
						else if (squareArray[index][subIndex] === 2) {
							returnedSquare = <div className="square square-dark-green"></div>
						}
						return returnedSquare
					})
					)
				})
				}
			</div>
			<div className="calendar-legend">
				<h5>Less</h5>
				<ul className="legend-squares">
					<li className="square square-grey"></li>
					<li className="square square-light-green"></li>
					<li className="square square-dark-green"></li>
				</ul>
				<h5>More</h5>
			</div>
		</div>
	)
}