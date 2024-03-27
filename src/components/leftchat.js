import "./left.css"
import '../iconfont/iconfont.css'
function Leftchat(props) {
    const handleRemoveChat = () => {
        props.removeChat(props.id); // 调用父组件传递过来的删除函数，传递当前聊天组件的 id
    };
    return (
        <div className='home_sidebar-body_9zbei'>
            <div className='chat-list'>
                <div className="home_chat-item_Oblai 
                 home_chat-item-selected_b6eBe" onClick={props.isDisplay}>
                    <div className='home_chat-item_sRstw'>{props.name}</div>
                    <div className='home_chat-item-info_9r6z'>
                        <div className='home_chat-item-count_Lpy'>0条对话</div>
                        <div className='.home_chat-item-date_NOFrp'></div>
                    </div>
                    <div className="home_chat-item-delete__3qV5m" >
                        <svg
                            height='14px'
                            width='21px'
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleRemoveChat}
                        > </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Leftchat