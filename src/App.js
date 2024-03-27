import './App.css'
import Left from './components/left'
import RightChatting from './components/chatting'
import Choosemask from './components/choosemask'
import React, { useState } from 'react';
function App() {
  const [showChoosemask, setshowChoosemask] = useState(true);
  const [inputMessage, setinputMessage] = useState([]);
  const [chatList, setChatList] = useState([{ id: 1, name: '新的聊天' }]); // 初始值为一个默认聊天
  const isDisplay = () => {
    setshowChoosemask(() => (!showChoosemask))
  }
  const handleInput = (inputText) => {
    setinputMessage([...inputMessage, inputText])
  }
  const addChat = (name) => {
    const newId = chatList.length + 1; // 生成新的聊天组件的 id
    const newChat = { id: newId, name: name }; console.log(newChat) // 新的聊天组件信息
    setChatList([...chatList, newChat]);
    // 将新的聊天组件信息添加到聊天列表中
  };

  const removeChat = (id) => {
    if (chatList.length > 1) {
      const updatedChatList = chatList.filter(chat => chat.id !== id); // 过滤出不包含指定 id 的聊天组件
      setChatList(updatedChatList);
    }// 更新聊天列表
  };

  return (
    <div className="total">
      <Left isDisplay={isDisplay}
        setshowChoosemask={setshowChoosemask}
        addChat={addChat}
        removeChat={removeChat}
        chatList={chatList} />
      {showChoosemask ? <RightChatting
        inputMessage={inputMessage}
        handleInput={handleInput}
      /> : <Choosemask
        isDisplay={isDisplay}
        addChat={addChat}
      />}
    </div>
  );
}
export default App;
