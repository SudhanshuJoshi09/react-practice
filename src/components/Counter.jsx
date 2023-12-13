import React, { useState, useEffect } from 'react'

function Counter() {
	const initialCount = parseInt(localStorage.getItem('count')) || 0
	const [count, setCount] = useState(initialCount)

	useEffect(() => localStorage.setItem('count', count.toString()), [count])

	return (
		<div>
			<h2 data-testid="count-id">Count: {count}</h2>
			<button
				data-testid="inc-id"
				onClick={() => setCount((prevCount) => prevCount + 1)}
			>
				+
			</button>
			<button
				data-testid="dec-id"
				onClick={() => setCount((prevCount) => prevCount - 1)}
			>
				-
			</button>
		</div>
	)
}

export default Counter
