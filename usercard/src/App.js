import React from "react"
import ReactDOM from "react-dom"
import Usercard from "./components/usercard"

import './App.css';


class App extends React.Component{
  render(){
    return <div>
      <Usercard/>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))