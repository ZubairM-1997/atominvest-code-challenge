import {shallow, mount} from "enzyme"
import React from "react"
import PopularWords from "../Components/PopularWords"
import PostList from "../Components/PostList"
import checkPropTypes from "check-prop-types"
import configureStore from 'redux-mock-store'
import {Provider} from "react-redux"


describe("PostList Component" , () => {
	const initialState = {
		id: 1,
		title: "Iron man",
		body: "jefojwefjoiwjfe"
	}

	let mockStore = configureStore()
	let store, wrapper

	beforeEach(() => {
		store = mockStore(initialState)
		wrapper = mount(<Provider store={store}><PostList/></Provider>)
	})

	it("renders the connected component" , () => {
		expect(wrapper.find(PostList).length).toEqual(1)
	})


})

describe("PopularWords Component" , () => {

	const expected = "Jamaica"
	describe("Checking PropTypes" , () => {
		it("Should not return any errors", () => {
			const propsErr = checkPropTypes(PopularWords.propTypes, expected, "prop", PopularWords.word)
			expect(propsErr).toBeUndefined();
		})
	})
})