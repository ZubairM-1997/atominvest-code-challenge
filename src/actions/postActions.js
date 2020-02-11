export const GET_POSTS = "GET_POSTS"
export const DELETE_POST = "DELETE_POST"

export const getPosts = () => {
	return (dispatch) => {
		fetch("https://jsonplaceholder.typicode.com/posts")
		.then((resp) => resp.json())
		.then((data) => {
			dispatch({
				type: GET_POSTS,
				payload: data
			})
		})
	}
}


export const deletePost = (id) => {
	return {
		type: DELETE_POST,
		id: id

	}
}