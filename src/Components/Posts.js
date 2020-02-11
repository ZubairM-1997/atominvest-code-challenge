import React, {Component} from "react"
import PostList from "./PostList"


export default class Posts extends Component{

	render(){
		return(
			<div>
				{
					this.props.postList.map((post) =>
						<PostList
						id={post.id}
						title={post.title}
						body={post.body}
						/>
					)
				}
			</div>
		)
	}
}




