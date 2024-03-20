import React, { Component } from 'react'
import Welcome from './Welcome'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
  render() {

    return this.state.isLoggedIn ? (
        <div>welcome</div>
    ) : (
        <div>welcome guest</div>
    )

    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>welcome</div>
    // } else {
    //     message = <div>welcome guest</div>
    // }

    // return <div>{message}</div>
    // if(this.state.isLoggedIn) {
    //     return(
    //         <div>
    //             Welcome
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             welcome guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>welcome</div>
    //     <div>guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting