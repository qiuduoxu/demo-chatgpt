import './choosemask.css'
import Returnbutton from './rightreturnbutton.js'
import Chattitleone from './rightchattitleone.js'
import Chattitletwo from './rightchattitletwo.js'
import Interfacemask from './rightinterfacemask.js'
import { useEffect, useState } from 'react'
import axios from 'axios';
function Choosemask({ isDisplay, addChat }) {

    const [data, setData] = useState([]);
    // let data = [];
    // const [Maskname, setMaskname] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:8080/demo/add")
    //         .then((res) => { return res.json(); })
    //         .then((value) => { return data = value; })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }, [])


    /*  const Mymask = [
         { name: '机器学习', link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f978.png' },
         { name: '以文搜图', link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f5bc-fe0f.png' },
         { name: "小红书写手", link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4d5.png' },
         { name: "心灵导师", link: 'https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f63e.png' },
     ]; */

    useEffect(() => {
        axios.get("http://localhost:8080/masks")
            .then(response => {
                // 处理来自后端的响应并将数据存储在状态中
                setData(response.data.data);
                console.log('Data received:', response.data);
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <div className="new-chat_new-chat_63RF3">
            <Returnbutton isDisplay={isDisplay} />
            <Chattitleone />
            <Chattitletwo />
            <div className='new-chat_masks__ArNS9'>
                {Array.isArray(data) && data.map(mask => (
                    <div key={mask.id} >
                        <Interfacemask
                            id={mask.id}
                            name={mask.name}
                            image={mask.image}
                            addChat={() => addChat(mask.name)}
                        /></div>
                ))}
            </div>
        </div>
    )
}
export default Choosemask
