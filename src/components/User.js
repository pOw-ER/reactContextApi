import React, { Component } from 'react'

class User extends Component {
  state = {
    isVisible = false
  }

  static defaultProps = {
    name : "Keine Info",
    salary : "Keine Info",
    department : "Keine Info"
  }

  onClickEvent= (e) => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  onDeleteUser = (e)=> {
    const {id} = this.props;
    // consumer dispatch
  }
  render() {

    // Destructing
    const {name,department, salary} = this.props;
    const {isVisible} = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className = "card-header d-flex justify-content-center">
            <h4 className = "d-inline" onClick={this.onClickEvent}>{name}</h4>

          </div>
        </div>

      </div>
    )
  }
}

export default User;
