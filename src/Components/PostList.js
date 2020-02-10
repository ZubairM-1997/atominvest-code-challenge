import React from "react"

export default class PostList extends React.Component {
	render(){
		return(
			<div id={this.props.id}>
				<h3>{this.props.title}</h3>
				<p>{this.props.body}</p>
			</div>
		)
	}
}