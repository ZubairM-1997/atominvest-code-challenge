import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import {getPosts} from "./actions/postActions"
import {bindActionCreators} from "redux"

class App extends React.Component{

  componentDidMount(){
    this.props.getAllPosts()
  }
  render(){
    return(
      <div>

      </div>
    )
  }
}

function mapStateToProps(state){
    return {
      posts: state.posts
    }
}

function mapDispatchToProps(dispatch){
  return {
      getAllPosts: bindActionCreators(getPosts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
