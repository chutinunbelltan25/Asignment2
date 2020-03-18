import React, {useRef, useEffect} from 'react';
import { TiDeleteOutline } from "react-icons/ti";

import { YourMessage, Navber, Footer, Chat, Icon, ReplyStopMessage, Time, TimeReply } from "./message.style";
const Message = (props) => {
        const { text, message, handleChange, handleSubmit, backToFriend, showDelete, hideDelete, deleteMessage } = props;        
        const messagesEndRef = useRef(null)
        const scrollToBottom = () => {
            return messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
          }
          useEffect(scrollToBottom);
    return (
        <div>
            <Navber>
            <button onClick={backToFriend}>Back</button>
            </Navber>
            <Chat >
            {message.length !== 0 && message.map((item,index) => (
            <div >
            <div onClick={()=> showDelete(item,index)}>
            <Icon 
            style = {{display : item.display }}
            onClick={()=>deleteMessage(item,index)}
            >
            <TiDeleteOutline />
            </Icon>
            <YourMessage  
            change = {item.change}
            >
              {item.text}
            </YourMessage>
            </div>
            <Time>{item.time}</Time>
            </div> 
            ))}
            {message.map(item => {
            if (item.stop !== ""){
            return (
            <div>
            <ReplyStopMessage>{item.stop}</ReplyStopMessage>
            <TimeReply>{item.time}</TimeReply>
            </div>
            )}
            })}
            <div ref={messagesEndRef}/>
            </Chat>
            <Footer onSubmit={handleSubmit}>
              <input 
              type='text' 
              value={text}
              onChange={handleChange}
              placeholder="Type your message here ..."
              onClick={hideDelete}

              />
              <button onClick={handleSubmit} >Send</button>
          </Footer>
          
        </div>
    )
}
export default Message
