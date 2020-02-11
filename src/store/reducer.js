import {GET_POSTS, DELETE_POST} from "../actions/postActions"

let initialState = {
	posts: []
}

function reducer (state = initialState, action) {
	switch(action.type){
		case GET_POSTS:
			return {
				...state,
				posts: action.payload
			}

		case DELETE_POST:
			console.log(state)
			return {
				posts: [...state.posts.filter((post) => post.id !== parseInt(action.id))]
			}
		default:
			return state;

	}
}

export default reducer;