
import React, { Component } from 'react'

class Decrement extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count: 200
        }
    }
    Decrement()
    {
        this.setState({
            count: this.state.count - 1

        },
            () =>
            {
                console.log("SetBack Values", this.state.count)
            }
        )
        console.log(this.state.count)
    }
    render()
    {
        return (
            <div>
                <div>Counts={this.state.count}</div>
                <button onClick={() => this.Decrement()}>Decrement</button>
            </div>
        )
    }

}






export default Decrement 
