import React from "react"
import {shallow} from "enzyme"
import checkPropTypes from "check-prop-types"
import Posts from "../Components/Posts"
import Statistics from "../Components/Statistics"



const expectedProps = [
	{id: 1,
	title: "Harry Potter",
	body: "Wingardium Leviosa"
	},

	{id: 2,
		title: "Power TV show",
		body: "Spoiler alert, Tariq kills Ghost"
	},

	{id: 3,
		title: "Avengers End Game",
		body: "Iron Man dies"
	},

	{id: 4,
		title: "Fast and Furious",
		body: "that movie franchise needs to end honestly"
	},

	{id: 5,
		title: "Breaking Bad",
		body: "a better TV show than Game of Thrones"
	},

]


describe("Posts Component", () => {
	describe("Checking PropTypes", () => {
		it("should not return an error" , () => {
			const propsErr = checkPropTypes(Posts.propTypes, expectedProps, "props", Posts.postList)
			expect(propsErr).toBeUndefined();

		})
	})
})

describe("Statistic Component" , () => {
	describe("Checking PropTypes", () => {
		it("should not return an error" , () => {
			const propsErr = checkPropTypes(Statistics.propTypes, expectedProps, "props", Statistics.postList)
			expect(propsErr).toBeUndefined();
		})
	})
})



