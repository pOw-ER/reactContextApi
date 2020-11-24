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
    visible : false
  }

  changeVisibility = (e) => {
    this.setState({
      visible : !this.state.visible
    })
  }
  render() {
    const {visible}= this.state
    return (
      <div className="col-md-8 my-4">
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
