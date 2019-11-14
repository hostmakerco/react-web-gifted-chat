import React, {Component} from 'react';
import {GiftedChat, InputToolbar, Composer} from 'react-web-gifted-chat'

const loremIpsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum';


const messages = [];
messages.push(generateMessage(`Idylla 2`, 3,  {image:'https://www.wykop.pl/cdn/c3201142/comment_Sc8p2KAVLx3EyNIpXuOXngk3ZYJ0g8eq.jpg'}));
messages.push(generateMessage(`Goood 1`, 2, {image:'http://img2.dmty.pl//uploads/201010/1286036107_by_julia2332_600.jpg'}));
messages.push(generateMessage(`This is a great example of system message`, 2, {system: true}));

for (let i = 0; i < 30; i++) {
  messages.push(generateMessage(loremIpsum.substring(0,(Math.random() * 100000)%loremIpsum.length), i))
}



function generateMessage(text, index, additionalData) {
  return {
    id: Math.round(Math.random() * 1000000),
    text: text,
    createdAt: new Date(),
    user: {
      id: index % 3 === 0 ? 1 : 2,
      name: 'Johniak',
    },
    ...additionalData,
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: messages
    }
    this.onSend = this.onSend.bind(this)
  }

  renderLoading() {
    return (<div>Loading...</div>)
  }

  onSend(messages) {
    for(let message of messages){
      this.setState({messages: [message,...this.state.messages]})
    }
  }

  renderInputToolbar = (props) => {
    // Here you will return your custom InputToolbar.js file you copied before and include with your stylings, edits.
    return (
      <InputToolbar {...props} containerStyle={{ height: 40 }} renderComposer={props1 => ( <Composer {...props1} textInputStyle={{ height: 31 }} /> )} />
    )
  }

  render() {
    return (
      <div className="App" style={styles.container}>
        <div style={styles.conversationList}>
        Converstions
        </div>
        <div style={styles.chat}>
          <GiftedChat user={{id: 1,}}
                      messages={this.state.messages}
                      renderInputToolbar={this.renderInputToolbar} 
                      onSend={this.onSend}/>
          </div>
        <div style={styles.converationDetails}>
        Conversation details
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  conversationList: {
    display:'flex',
    flex: 1,
  },
  chat: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#ccc",
    borderRightStyle: "solid",
    borderLeftStyle: "solid",
  },
  converationDetails: {
    display:'flex',
    flex: 1,
  }
}

export default App;
