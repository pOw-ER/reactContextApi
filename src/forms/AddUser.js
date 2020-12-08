import React, { Component } from 'react'
import posed from "react-pose"
import UserConsumer from "../context"
import axios from 'axios'

// var uniqid = require('uniqid'); // uniq id üretme kütüphanesi // npm install uniqid olarak yükledikten sonra bu sekilde tanimliyoruz
// pose animation (react te bir animasyon kütüphanesi)
const Animation = posed.div({
  visible : {
    opacity : 1,
    applyAtStart : {
      display : "block" // bu gösterilmediginde tamamen cikip aradaki mesafe olmamasi icin
    }
  },
  hidden : {
    opacity : 0,
    applyAtEnd : {
      display : "none" // bu gösterilmediginde tamamen cikip aradaki mesafe olmamasi icin
    }
  }
});
class AddUser extends Component {

  state = {
    visible : false,
    name : "",
    salary : "",
    department :"",
    place : "",
    error : false
  }

  changeVisibility = (e) => {
    this.setState({
      visible : !this.state.visible
    })
  }
  // state koyup degistirmek icin onChange = {this.changeInput} taki gibi  bir fonksiyon yazmak gerekir

  validateForm = ()=>{
    const {name,salary,department,place}= this.state;
    if (name==="" || salary ==="" || department ==="" || place ===""){
      return false;
    }
    return true;
  }
  changeInput = (e)=> {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  addUser = async (dispatch,e)=>{
    e.preventDefault();
    const {name,department,salary,place} = this.state;

    const newUser = {

      // name: name,
      // salary:salary,
      // department : department,
      // place:place
      //ES6
      name,
      department,
      salary,
      place
    }

    if (!this.validateForm()) {
      this.setState({
        error : true
      })
      return;
    }

    const response = await axios.post("http://localhost:3004/users",newUser)

    dispatch({type:"ADD_USER",payload:response.data});

    //redirect
    this.props.history.push("/"); // tkilaninca ana sayfaya yönlendirdik.
  }


  render() {
    const {visible,name,salary,department,place,error}= this.state
    return <UserConsumer>
      {
        value => {
          const {dispatch}=value;
          return (
            <div className="col-md-8 mb-4">
              <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
              <Animation pose = {visible ? 'visible' : 'hidden'}>
              <div className="card">
                <div className="card-header">
                  <h4>Add User Form</h4>
                </div>
                <div className="card-body">
                  {
                    error ?
                    <div className="alert alert-danger">Bitte prüfen Sie Ihre Daten, ob die richtig eingetragen werden... </div>
                    : null
                  }
                  <form onSubmit={this.addUser.bind(this,dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        className="form-control"
                        value = {name}
                        onChange = {this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Abteilung</label>
                      <input
                        type="text"
                        name="department"
                        id="department"
                        placeholder="Enter your department"
                        className="form-control"
                        value = {department}
                        onChange = {this.changeInput} //value degistirmek icin bu fonksiyon sart
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="salary">Gehalt</label>
                      <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder="Enter your salary"
                        className="form-control"
                        value = {salary}
                        onChange = {this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="place">Ort</label>
                      <input
                        type="text"
                        name="place"
                        id="place"
                        placeholder="Enter your place"
                        className="form-control"
                        value = {place}
                        onChange = {this.changeInput}
                      />
                    </div>
                    <button className="btn btn-danger btn-block" type="submit">Add User</button>
                  </form>
                </div>
              </div>
              </Animation>
            </div>
          )
        }
      }
    </UserConsumer>
  }
}


export default AddUser;
