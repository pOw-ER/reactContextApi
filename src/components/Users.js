import React, { Component } from 'react'
import User from "./User"


class Users extends Component {
  render() {
    return (
      <div>
        {
          Users.map(user => {
            return (
              <User
                key= {user.id}
                id = {user.id}
                name = {user.name}
                salary = {user.salary}
                department = {user.department}
              />
            )
          })
        }
      </div>
    )
  }
}

export default Users;
