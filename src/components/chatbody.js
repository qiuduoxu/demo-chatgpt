import { useState } from 'react'
import './chatting.css'
function Chatbody({ inputMessage }) {

    return (

        <div className='chat_chat-body_QFv5x'>
            {inputMessage.map((message, index) => (
                <div className='chat_chat-message_dg8rL' >
                    <div className='chat_chat-message-container_OX8'>
                        <div className='chat_chat-message-item_dKqM1'>
                            <div className='markdowm-body'>
                                <p className='markdowm-body_dk'>{message}</p>
                            </div>
                        </div>
                        <div className='chat_chat-message-action-date__RsXTn'>预设提示词</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Chatbody