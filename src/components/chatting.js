import Chatheader from './chatheader.js'
import Chatbody from './chatbody.js'
import Chatinput from './chatinput.js'
import { useState } from 'react';

function RightChatting({ inputMessage, handleInput }) {
    return (
        <div className='right'>
            <Chatheader inputMessage={inputMessage} />
            <Chatbody inputMessage={inputMessage} />
            <Chatinput handleInput={handleInput} />
        </div>
    )
}
export default RightChatting