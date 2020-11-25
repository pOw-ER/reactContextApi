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

    users : [
      {
        id:"unique-1",
        name: "Enes Yilmaz",
        salary : "5000",
        department : "Informatik",
        place: "Dortmund"
      },
      {
        id:"unique-2",
        name: "Büsra Yilmaz",
        salary : "5000",
        department : "Lehrerin",
        place: "Hannover"
      },
      {
        id:"unique-3",
        name: "Enes Kement",
        salary : "4000",
        department : "Gebäudetechniker",
        place: "Hamburg"
      }
    ],
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
