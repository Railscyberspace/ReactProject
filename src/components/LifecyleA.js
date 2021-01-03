import React, { Component } from 'react'
import LifecyleB from './LifecyleB'

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
    shouldComponentUpdate()
    {
        console.log('LIfecyleA this.shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifecyleA render')
        return null
    }
    componentDidUpdate()
    {
        console.log('LifecyleA componentDidUpdate')
    }
    changeState = () =>
    {
        this.setState({
            name: 'Codevolution',
        })
    }

    render()
    {
        console.log('LifecyleA render')
        return (
            <div>
                <h2>Lifecyle A </h2>
                <button onClick={this.changeState}>Change State</button>
                <LifecyleB></LifecyleB>
            </div>
        )
    }
}

export default LifecyleA
