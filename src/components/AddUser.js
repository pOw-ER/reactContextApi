import React, { Component } from 'react'
import posed from "react-pose"

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
    place : ""
  }

  changeVisibility = (e) => {
    this.setState({
      visible : !this.state.visible
    })
  }
  // state koyup degistirmek icin onChange = {this.changeInput} taki gibi  bir fonksiyon yazmak gerekir
  changeInput = (e)=> {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render() {
    const {visible,name,salary,department,place}= this.state
    return (
      <div className="col-md-8 mb-4">
        <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
        <Animation pose = {visible ? 'visible' : 'hidden'}>
        <div className="card">
          <div className="card-header">
            <h4>Add User Form</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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


export default AddUser;
