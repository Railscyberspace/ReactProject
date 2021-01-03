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
        console.log('LifecyleA getDerivedStateFromProps')
        return null
    }
    componentDidMount()
    {
        console.log('LifecyleA componentDidMount')
    }
    render()
    {
        console.log('LifecyleA render')
        return (
            <div>
                Lifecyle A
            </div>
        )
    }
}

export default LifecyleA
