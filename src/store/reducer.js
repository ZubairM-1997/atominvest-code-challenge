import {GET_POSTS} from "../actions/postActions"

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
		default:
			return state;

	}
}

export default reducer;