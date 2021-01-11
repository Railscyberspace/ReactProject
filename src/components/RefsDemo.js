import React, { Component } from 'react'

class RefsDemo extends Component
{
    constructor(props)
    {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element =>
        {
            this.cbRef = element
        }
    }

    componentDidMount()
    {

        if (this.cbRef)
        {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        //console.log(this.inputRef)
    }

    ClickHandler = () =>
    {
        alert(this.inputRef.current.value)
    }

    render()
    {
        return (
            <div>

                <input type="text" placeholder="Enter FirstName" inputRef={this.inputRef}></input>
                <input type="text" placeholder="Enter lastName" setCbRef={this.inputRef}></input>
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
