import React, { Component } from 'react'
import UserConsumer from "../context"
import axios from 'axios'



class UpdateUser extends Component {

  state = {
    name : "",
    salary : "",
    department :"",
    place : "",
    error : false
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
  componentDidMount = async () =>{
    const {id} = this.props.match.params;
    const response = await axios.get(`http://localhost:3004/users/${id}`)
    const {name,salary,department,place} = response.data;
    this.setState({
      name,
      salary,
      department,
      place
    })
  }


  UpdateUser = async (dispatch,e)=>{
    e.preventDefault();

    // Update User
    const {name,salary,department,place}= this.state;
    const {id} = this.props.match.params;
    const updatedUser={
      name,
      salary,
      department,
      place
    }

    if (!this.validateForm()) {
      this.setState({
        error : true
      })
      return;
    }

    const response = await axios.put(`http://localhost:3004/users/${id}`,updatedUser) // put ile update yapilir ilk degisecek api sonra da yeni update edilecek bilgi girilir.

    dispatch({type: "UPDATE_USER", payload : response.data}); // simdi context js te upateuser case i olusatumaliyiz.
    //redirect
    this.props.history.push("/"); // tkilaninca ana sayfaya yönlendirdik.
  }


  render() {
    const {name,salary,department,place,error}= this.state
    return <UserConsumer>
      {
        value => {
          const {dispatch}=value;
          return (
            <div className="col-md-8 mb-4">


              <div className="card">
                <div className="card-header">
                  <h4>Update User Form</h4>
                </div>
                <div className="card-body">
                  {
                    error ?
                    <div className="alert alert-danger">Bitte prüfen Sie Ihre Daten, ob die richtig eingetragen werden...</div>
                    :null
                  }
                  <form onSubmit={this.UpdateUser.bind(this,dispatch)}>
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
                    <button className="btn btn-danger btn-block" type="submit">Update User</button>
                  </form>
                </div>
              </div>

            </div>
          )
        }
      }
    </UserConsumer>
  }
}


export default UpdateUser;

