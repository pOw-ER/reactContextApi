import React, { Component } from 'react'

class AddUser extends Component {
  render() {
    return (
      <div className="col-md-8 mb-4">
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

      </div>
    )
  }
}


export default AddUser;
