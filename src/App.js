import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import NewRoomForm from './components/NewRoomForm'
import RoomList from './components/RoomList'
import SendMessageForm from './components/SendMessageForm'

import { tokenUrl, instanceLocator } from './config'

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'devflash',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 19377572,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
  }

  render() {
    return (
     <div className="app">
       <RoomList />
       <MessageList messages={this.state.messages} />
       <NewRoomForm />
       <SendMessageForm />
     </div> 
    )
  }
}

export default App;
