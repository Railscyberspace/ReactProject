import React, { Component } from 'react'

class Form extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            Username: '',
            Comment: '',
            Topic: 'react'
        }
    }
    handleUsernameChange = event =>
    {
        this.setState({
            Username: event.target.value
        })
    }
    handleCommentChange = event =>
    {
        this.setState({
            Comment: event.target.value

        })
    }

    handleTopicChange = event =>
    {
        this.setState({
            Topic: event.target.value
        })
    }

    render()
    {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.Username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.Comment} onChange={this.handleCommentChange}></textarea>
                </div>

                <div>
                    <label> Topic</label>
                    <select value={this.state.Topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Anuglar </option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div >
            </form >
        )
    }

}

export default Form
