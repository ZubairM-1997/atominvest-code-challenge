import React from "react"
import PopularWords from "./PopularWords"
import propTypes from "prop-types"

class Statistics extends React.Component{

	state = {
		total: 0,
		topFive: []
	}


	componentDidUpdate(prevProps, prevState){
		if(prevProps !== this.props){
			this.getWords()
		}
	}

	getWords(){
		let countArray = []
		let occurances = {}
		this.props.postList.forEach((post) => {

			let postTitle = post.title.split(" ")
			postTitle.forEach((word) => {
				if(!occurances[word]){
					occurances[word] = 1
				}else{
					occurances[word]++
				}
			})

			let postBody = post.body.split(" ")
			postBody.forEach((word) => {
				if(!occurances[word]){
					occurances[word] = 1
				}else{
					occurances[word]++
				}
			})

			let totalPostLength = postTitle.length + postBody.length
			countArray.push(totalPostLength)
	})
		console.log(occurances)
		this.analyse(countArray, occurances)
  }


	analyse(array, obj){
		let sum = array.reduce((a, b) => a + b, 0)
		let tops = []
		tops = Object.keys(obj).sort(function(a, b) {return obj[a] - obj[b]})
		let reverse = tops.slice(-(5)).reverse();


		this.setState({
			...this.state,
			total: sum,
			topFive: reverse
		}, () => {
			console.log(this.state)
		}
		)

	  }

	render(){
		return(
			<div>
				<h2>Top 5 words</h2>
				<ol>
					{
						this.state.topFive.map((word) => <PopularWords word={word}/>)
					}
				</ol>

				<h2>Total number of words: {this.state.total}</h2>

			</div>
		)
	}
}

Statistics.propTypes = {
	postList: propTypes.array
}

export default Statistics