import React from "react"
import { connect } from 'react-redux';
import {deletePost} from "../actions/postActions"

class PostList extends React.Component {


	deletePost(e){
		this.props.deletePost(e.target.id)
	}


	render(){
		return(
			<div >
				<li >
					<h3>{this.props.title}</h3>
					<p>{this.props.body}</p>
					<button id={this.props.id} onClick={(e) => this.deletePost(e)}>Delete</button>
				</li>

			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => dispatch(deletePost(id))

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

