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
	console.log(squareArray)

	return (
		<div className="calendar-container">
			<h4 className="calendar-title">Coffees consumed in the last year</h4>
			<ul className="calendar-months">
				<li className="month">Jan</li>
				<li className="month">Feb</li>
				<li className="month">Mar</li>
				<li className="month">Apr</li>
				<li className="month">May</li>
				<li className="month">Jun</li>
				<li className="month">Jul</li>
				<li className="month">Aug</li>
				<li className="month">Sep</li>
				<li className="month">Oct</li>
				<li className="month">Nov</li>
				<li className="month">Dec</li>
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