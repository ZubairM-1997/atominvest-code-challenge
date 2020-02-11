import React, {Component} from "react"
import PostList from "./PostList"
import propTypes from "prop-types"





class Posts extends Component{

	render(){
		return(
			<div className="posts">
				<ol className="list">
					{
						this.props.postList.map((post) =>
							<PostList
							id={post.id}
							title={post.title}
							body={post.body}
							/>
						)
					}
				</ol>

			</div>
		)
	}
}

Posts.propTypes = {
	postList: propTypes.array
}

export default Posts;




