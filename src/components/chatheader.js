import "./chatting.css"
function Chatheader({ inputMessage }) {

    return (
        <div className="window-header">
            <div className="window-header-title">
                <div className="window-header-main-title">新的聊天</div>
                <div className="window-header-sub-title">共有{inputMessage.length}条对话</div>
            </div>
            <div className="chat_prompt-toast_VCUf"></div>
        </div>
    )
}
export default Chatheader