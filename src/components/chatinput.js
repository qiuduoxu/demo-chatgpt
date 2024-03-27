import { useState } from 'react'
import './chatting.css'
function Input({ handleInput }) {
    const [message, setmessage] = useState("")
    const handleChange = (event) => {
        setmessage(event.target.value)
    }
    const handleonSumbit = () => {
        handleInput(message);
        setmessage("");
    }
    return (
        <div className="chat_chat-input-panel__rO72m">
            <label className='.chat_chat-input-panel-inner___IQHi'>
                <textarea className='chat_chat-input__PQ_oF' value={message} onChange={handleChange}></textarea>
                <button className='chat_chat-input-send_GFQZo' onClick={handleonSumbit} >
                    <div className='button_icon-button-text__my76e'>发送</div>
                </button>
            </label>

        </div>
    )
}
export default Input