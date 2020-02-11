import {GET_POSTS, DELETE_POST, FAILED_REQUEST} from "../actions/postActions"

let initialState = {
	posts: [],
	error: null,
	fetched: false
}

function reducer (state = initialState, action) {
	switch(action.type){
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				fetched: true
			}

		case DELETE_POST:
			return {
				...state,
				posts: [...state.posts.filter((post) => post.id !== parseInt(action.id))]
			}

		case FAILED_REQUEST:
			return {
				...state,
				fetched: false,
				error: action.payload

			}
		default:
			return state;

	}
}

export default reducer;