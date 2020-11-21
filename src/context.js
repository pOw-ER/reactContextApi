import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component {
  state = { // biz state olusturduk. bunu props olrak users a aktaricaz. bu normalde kullnamaamiz gereken bir yöntem ama ögrenmek icin yapiyoruz. Context api olmadan olunca

    users : [
      {
        id:1,
        name: "Enes Yilmaz",
        salary : "5000",
        department : "Informatik",
        ort: "Dortmund"
      },
      {
        id:2,
        name: "Büsra Yilmaz",
        salary : "5000",
        department : "Lehrerin",
        ort: "Hannover"
      },
      {
        id:3,
        name: "Enes Kement",
        salary : "4000",
        department : "Gebäudetechniker",
        ort: "Hamburg"
      }
    ]
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
