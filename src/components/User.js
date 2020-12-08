import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context"
import axios from 'axios'
import {Link} from "react-router-dom"


class User extends Component {
  state = {
    isVisible : false
  }

  static defaultProps = {
    name : "Keine Information",
    salary : "Keine Information",
    department : "Keine Information",
    place : "Kein Information"
  }

  onClickEvent= (e) => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  onDeleteUser = async (dispatch,e)=> {
    const {id} = this.props;
    //delete request
    await axios.delete(`http://localhost:3004/users/${id}`);// burda db.json dan da silmis oluyoruz. yani databesimiz diyebilirz. http://localhost:3004/users/unique-1 bölyle sadece 1. elemana ulasaniliyorduk ondann dolayi silmek icin son kisma id yazmamiz yteterli oluyor.
    // consumer dispatch
    dispatch ({type : "DELETE_USER", payload:id})
  }

  // componentWillUnmount() {
  //   console.log("Component Will Anmount");// component silme islemi gerceklestiginde calisir.
  // }

  render() {

    // Destructing
    const {id,name,department, salary,place} = this.props;
    const {isVisible} = this.state;
    return (<UserConsumer>
      {
        value => {
          const {dispatch} = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card" style = {isVisible ? {backgroundColor : "#62848d", color: "white"}: null}>
                <div className = "card-header d-flex justify-content-between">
                  <h4 className = "d-inline" onClick={this.onClickEvent}>{name}</h4>
                  <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor : "pointer"}}></i>
                </div>
                { isVisible ?
                <div className = "card-body">
                  <p className="card-text">Gehalt : {salary}</p>
                  <p className="card-text">Abteilung : {department}</p>
                  <p className="card-text">Ort : {place}</p>
                  <Link to={`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
                </div> : null
                }
              </div>
            </div>
          )
        }
      }
    </UserConsumer>)

  }
}
User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  place : PropTypes.string.isRequired
}

export default User;
