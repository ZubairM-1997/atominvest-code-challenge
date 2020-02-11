import React from "react"
import propTypes from "prop-types"

const PopularWords = (props) => {
	return (
		<div className="word">
			<li>{props.word}</li>
		</div>

	)
}

PopularWords.propTypes = {
	word: propTypes.string
}


export default PopularWords