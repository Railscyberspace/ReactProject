import React, { Component } from 'react'

class LifecyleB extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name: 'Sunday'
        }
        console.log('LifecyleB constructor')
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log('LifecyleB getDerivedStateFromProps')
        return null
    }
    componentDidMount()
    {
        console.log('LifecyleB componentDidMount')
    }


    shouldComponentUpdate()
    {
        console.log('LIfecyleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifecyleB render')
        return null
    }
    componentDidUpdate()
    {
        console.log('LifecyleB componentDidUpdate')
    }

    render()
    {
        console.log('LifecyleB render')
        return (
            <div>
                <button>Lifecyle B</button>
            </div>
        )
    }
}

export default LifecyleB
