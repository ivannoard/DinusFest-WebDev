import axios from "axios";
import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { MdSend } from "react-icons/md";
// import { SUBS_CHAT_BY_ID, CHAT_BY_USER } from '../../graphql/user';
// import { useSubscription, useMutation } from "@apollo/client";

function Bot({message,}) {
  return (
    <>
      <div key={message} className="chat-bot bg-sky-600 text-white w-3/4 px-3 py-2 rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px]">
        {
         message?.map(item=>(
            <p>{item}</p>
          ))
        }
      </div>
    </>
  );
}
function User(props) {
  return (
    <>
      <div className="chat-user bg-white text-slate-900 w-3/4 px-3 py-2 rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] ml-auto">
        <p>{props.message}</p>
      </div>
    </>
  );
}
const ChatBot = ({ setState }) => {
  const [dataChat, setDataChat] = useState([]);
  const [fields, setFields] = useState({
    user_chat: ''
  });
  // const { data, loading, error } = useSubscription(SUBS_CHAT_BY_ID, { variables: { id: id.user_id } });
  // const [chatUser, { loading: loadingDelete }] = useMutation(CHAT_BY_USER, {
  //   onCompleted: (data) => {
  //   },
  //   onError: (error) => {
  //     console.log('Terjadi error di mutasi delete', { error });
  //   }
  // });
  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  // console.log()
  // const chat = () => {
  //   // console.log(id)
  //   const id = JSON.parse(localStorage.getItem('user'));
  //   chatUser({
  //     variables: {
  //       massage: fields.user_chat,
  //       user_id: id.user_id
  //     }
  //   })
  // }
  const chatUser =async () => {

    await axios.post('http://localhost:5005/webhooks/rest/webhook',{
      sender:'1',
      message:fields.user_chat
    },{
      headers:{
        'content-type':'application/json'
      }
    }).then(response=>{
      const chat = {
        bot: false,
        message: [fields.user_chat]
      }
      const botResponse = {
        bot:true,
        message:[]
      }
      const responseText= response.data.map(item=>item.text)
      botResponse.message=responseText
      console.log(botResponse)
      setDataChat([...dataChat, chat,botResponse])
      setFields({
        user_chat: ''
      })
    }).catch(e=>console.log(e))
    
   

    
  }
  return (
    <>
      <div className="fixed h-screen right-0 w-full md:w-[400px] z-[9999]">
        <div className="flex flex-col h-full  justify-between">
          <div className="header-chat px-2 py-3 flex bg-white justify-between items-center shadow-md">
            <FiChevronLeft
              size={25}
              className="cursor-pointer"
              onClick={() => setState(false)}
            />
            <h3 className="font-semibold text-[16px]">Memobot</h3>
            <div></div>
          </div>
          <div className="overflow-x-hidden bg-white bg-opacity-60 h-full overflow-y-scroll p-2 flex flex-col gap-3">
            {
              dataChat?.map((item, index) => {
                if (item.bot) {
                  return <Bot message={item.message === undefined ? ['. . .'] : item.message} key={index}/>
                } else {
                  return <User message={item.message[0]} key={index} />
                }
              })
            }
          </div>

          <div className="bg-white border-2-t  mt-auto md:mb-5 p-3 flex items-center justify-between gap-3">
            <input
              type="text"
              name="user_chat"
              id="user_chat"
              value={fields.user_chat}
              className="bg-white  rounded-[10px] w-full py-2 px-4"
              placeholder="Apa yang ingin anda tanyakan?"
              onChange={handleChange}
            />
            <button onClick={() => chatUser()} className="bg-sky-600 rounded-full p-3">
              <MdSend fill="#FFFFFF" size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
