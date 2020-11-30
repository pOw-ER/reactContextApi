import React, { Component } from 'react'

const UserContext = React.createContext(); // provider, consumer

const reducer = (state,action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users : state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER":
      return {
        ...state,
        users : [...state.users, action.payload]
      }
    default:
      return state
  }
}

export class UserProvider extends Component {
  state = { // biz state olusturduk. bunu props olrak users a aktaricaz. bu normalde kullnamaamiz gereken bir yöntem ama ögrenmek icin yapiyoruz. Context api olmadan olunca

    users : [], // json ile yaptik o yüzden burdan aldik.
    dispatch : action => {
      this.setState(state => reducer(state,action))
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
