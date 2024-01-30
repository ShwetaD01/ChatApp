import React, { useEffect , useState} from 'react'
import axios from "axios";


const ChatPage = () => {
    const [data, setData]=useState([])

    const fetchData = async()=>{
        try{
            const chatdata  = await axios.get('/api/chats')
            setData(chatdata.data)
            console.log(chatdata.data)
       
    }catch(err){
console.error(err)
    }
}
    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <div>
    {
        data?.map((ele, i)=>{
            return(
                <div key={data.id}>{ele.chatName}</div>
            )
        })
    }
    
    </div>
  )
}

export default ChatPage
