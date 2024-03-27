import './left.css'
import LeftUpper from './leftupper.js'
import Maskbutton from './leftmaskbutton.js'
import Leftchat from './leftchat.js'
function Left({ isDisplay, addChat, removeChat, chatList, setshowChoosemask }) {
    return (
        <div className='left' >
            <LeftUpper />
            <Maskbutton isDisplay={isDisplay} />
            {chatList.map((chat) => (
                <Leftchat
                    key={chat.id}
                    name={chat.name}
                    removeChat={() => removeChat(chat.id)} isDisplay={() => setshowChoosemask(true)} />
                // 渲染所有聊天组件
            ))}
            {/* <button onClick={addChat}>添加</button> 添加按钮，点击时调用 addChat 函数 */}

            {/* <Leftchat /> */}
        </div>
    )
}
export default Left