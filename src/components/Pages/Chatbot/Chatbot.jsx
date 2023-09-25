import React, { useState } from 'react'
import "./Chatbot.css"
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import LeftSidebar from '../../LeftSidebar/LeftSidebar';
const API_KEY = process.env.REACT_APP_API_KEY; 


const Chatbot = () => {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
    {    
        message: "Hello, I am Your Software Assistant",
        sender: "ChatGpt"
    }
    ])

const handleSend = async(message)=>{
    const newMessage ={
        message : message,
        sender : "user",
        direction: "outgoing"
    }

const newMessages = [...messages, newMessage]
setMessages(newMessages);
setTyping(true);

await processMessageToChatGPT(newMessages);
}

async function processMessageToChatGPT(chatMessages){

let apiMessages = chatMessages.map((messageObject)=>{
let role ="";
if(messageObject.sender === "ChatGPT"){
    role="assistant"
} else {
    role = "user"
}
return{ role: role, content: messageObject.message }
});


const systemMessage = {
    role: "system",
content: " "
}

const apiRequestBody = {
    "model" : "gpt-3.5-turbo",
    "messages" :[
        systemMessage,
...apiMessages
    ]   
}

await fetch("https://api.openai.com/v1/chat/completions",{
    method: "POST",
    headers: {
        "Authorization": "Bearer " + API_KEY ,
        "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
}).then((data) =>{
return data.json();
}).then((data) =>{
setMessages(
    [...chatMessages,{
       message: data.choices[0].message.content,
       sender: "ChatGPT"
    }]
)
setTyping(false)
});  
}
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className='chat-container'>
      <MainContainer>
        <div className="main-container">
        <ChatContainer>
            <MessageList
            typingIndicator={typing ? <TypingIndicator content="Typeing..."/> : null}
            >
                 {
                    messages.map((message, i)=>{
                        return <Message key={i} model={message}/>
                    })
                 }
            </MessageList>
            <MessageInput placeholder='Type your question here...!' onSend={handleSend}/>
        </ChatContainer>
        </div>
      </MainContainer>
      </div>
    </div>
  )
}

export default Chatbot
