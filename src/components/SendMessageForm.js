import React from 'react'

class SendMessageForm extends React.Component {
  state = { message: '' }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return(
      <form 
        onSubmit={this.handleSubmit} 
        className="send-message-form">
        <input 
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    )
  }
}

export default SendMessageForm