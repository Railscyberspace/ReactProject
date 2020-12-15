import React, { Component } from 'react'

class Login extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            Login: "FirstName"
        }
    }
    clickHandler = () =>
    {
        this.setState({

            message: "login Sucssful"
        })
    }

    render()
    {
        return (

            <div>
                <label type="text" placeholder="firstName" pattern="min=5 max=15" required >FirstName</label><br></br>
                <input type="firstName" text="firstName" /><br></br>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Submit</button>
            </div >
        )
    }
}
export default Login







