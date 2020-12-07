import React, { Component } from 'react'
import "./App.css"
import AddUser from './components/AddUser'
import Navbar from "./layout/Navbar"
import Users from "./components/Users"
import NotFound from "./pages/NotFound"
import Contribute from './pages/Contribute'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

class App extends Component {
  render() {
    return ( // router icine aliyoruz ve route compnenti icinde yazmak istedigimiz compponenti yaziyoruz. oath kismi sadece / olunca anasayfada gosterilecek componentleri aktif eder. ad user icin path kismini /add yaptik yani localhost:3000/add diyince add user componenti gözükür ayri sayfa gibi
      <Router>
        <div className="container">
          {/* <Test test="deneme"/> */}
          <Navbar title="User App"/>
          <hr/>
          <Switch>
            <Route exact path="/" component ={Users}/>
            <Route exact path="/add" component ={AddUser}/>
            <Route exact path="/github" component={Contribute}/>
            <Route component={NotFound}/>
          </Switch>


        </div>
      </Router>
    )
  }
}

export default App;
