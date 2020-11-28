import React, { Component } from 'react'
import "./App.css"
import AddUser from './components/AddUser'
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Test from "./components/test"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Test test="deneme"/>
        <Navbar title="User App"/>
        <hr/>
        <AddUser/>
        <Users/>

      </div>
    )
  }
}

export default App;
