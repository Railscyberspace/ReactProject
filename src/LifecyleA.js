import React, { Component } from 'react'

class LifecyleA extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name: 'Sunday'
        }
        console.log('LifecyleA constructor')
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log('object')
    }
    render()
    {
        return (
            <div>

            </div>
        )
    }
}

export default LifecyleA
