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

    handleSubmit = event =>
    {
        alert(`${ this.state.Username
            } ${ this.state.Comment } ${ this.state.Topic }`)
        event.preventDefault()


    }


    render()
    {
        const { Username, Comment, Topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={Username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={Comment} onChange={this.handleCommentChange}></textarea>
                </div>

                <div>
                    <label> Topic</label>
                    <select value={Topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Anuglar </option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div >
                <button type="submit">Submit</button>
            </form >
        )
    }

}

export default Form
