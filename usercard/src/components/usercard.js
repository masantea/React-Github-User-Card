import React from "react"
import ReactDOM, { render } from "react-dom"

export default class Usercard extends React.Component{
  constructor  (props){
    super(props)

    this.state={

    }

    
    render() {
      console.log('Render')

      return <div>
        <div className= "usercard">

        </div>
      </div>
    }
  }
}

