import React, { Component } from 'react';
import { connect } from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { getUsersList } from "./actions/listActions"
import Layout from "./components/layout/layout"

class App extends Component {

  componentDidMount () {
      this.props.getUserList()
  }

  render() {  
    return <MuiThemeProvider><Layout /></MuiThemeProvider>
  }
}

const mapStateToProps = ({ usersList }) => ({
    usersList
})

const mapDispatchToProps = (dispatch) => ({
  getUserList : ()=> dispatch(getUsersList()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
