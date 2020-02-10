export const GET_POSTS = "GET_POSTS"

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


