import reducer from "../store/reducer"
import {GET_POSTS, DELETE_POST, FAILED_REQUEST} from "../actions/postActions"

describe("Reducer tests" , () => {
	it("has a default state", () => {
		expect(reducer(undefined, {type: "unexpected"})).toEqual({
			posts: [],
			error: null,
			fetched: false
		})
	})
	it("can handle GET_POSTS request", () => {
		let array = [1, 2 ,3, 4, 5]
		expect(reducer(undefined, {
			type: GET_POSTS,
			payload: array
		})).toEqual({
			error: null,
			fetched: true,
			posts: array
		})
	})
	it("returns error if FAILED_REQUEST", () => {
		let errorObj = {
			message: "Sample errors"
		}
		expect(reducer(undefined, {
			type: FAILED_REQUEST,
			payload: errorObj
		})).toEqual({
			posts: [],
			error: errorObj,
			fetched: false
		})
	})

	it("deletes a post from store if DELETE_POST", () => {
		let initial = {
			posts: [{id: 1, title: "djfkl jened", body: "ejdjdlkjld"} , {id: 2, title: "jdlqewdqd" , body: "hedhihdihiu"}],
			error: null,
			fetched: true
		}

		let action = {
			type: DELETE_POST,
			id: 1
		}
		expect(reducer(initial, action)).toEqual({
			error: null,
			fetched: true,
			posts: [...initial.posts.filter((post) => post.id !== action.id)]
		})
	})



})
