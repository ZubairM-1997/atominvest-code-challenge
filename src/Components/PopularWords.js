import React from "react"


export default class PopularWords extends React.Component{
	render(){
		return(
			<div>

				<li>{this.props.word}</li>
			</div>
		)
	}
}