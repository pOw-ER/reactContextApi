import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context"


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

  onDeleteUser = (dispatch,e)=> {
    const {id} = this.props;
    // consumer dispatch
    dispatch ({type : "DELETE_USER", payload:id})
  }
  render() {

    // Destructing
    const {name,department, salary,place} = this.props;
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
