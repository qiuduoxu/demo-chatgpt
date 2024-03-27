import './choosemask.css'
import Returnbutton from './rightreturnbutton.js'
import Chattitleone from './rightchattitleone.js'
import Chattitletwo from './rightchattitletwo.js'
import Interfacemask from './rightinterfacemask.js'
function Choosemask({ isDisplay, addChat }) {


    const Mymask = [
        { name: '机器学习', link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f978.png' },
        { name: '以文搜图', link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f5bc-fe0f.png' },
        { name: "小红书写手", link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4d5.png' },
        { name: "心灵导师", link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f63e.png' },
    ];
    return (
        <div className="new-chat_new-chat_63RF3">
            <Returnbutton isDisplay={isDisplay} />
            <Chattitleone />
            <Chattitletwo />
            <div className='new-chat_masks__ArNS9'>
                {Mymask.map((mask, index) => (
                    <div key={index} ><Interfacemask
                        key={index}
                        name={mask.name}
                        link={mask.link}
                        addChat={() => addChat(mask.name)}

                    /></div>
                ))}
            </div>
        </div>
    )
}
export default Choosemask
