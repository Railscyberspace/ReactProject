import React, { Component } from 'react'

class Greet extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isloggedIn: true

        }
    }
    render()
    {
        return this.state.isloggedIn ? (
            <div>Welcome Gift
            </div>) : (
                <div>Welocme Pat</div>
            )

    }
}

export default Greet
