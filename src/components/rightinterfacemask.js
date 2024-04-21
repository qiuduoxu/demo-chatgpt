import './choosemask.css'
function Interfacemask(props) {

    return (
        <div className='new-chat_mask-row__ZRTfV'>
            <div className='new-chat_mask__P5aBk' onClick={() => props.addChat(props.name)} >
                <div className='user-avatar' >
                    <img src={props.image} className='epr-emoji-img'></img>
                </div>
                <div className='new-chat_mask-name__AytPM' >{props.name}</div>
            </div>
        </div>
    )
}
export default Interfacemask