import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { MdSend } from "react-icons/md";
function Bot(props) {
  return (
    <>
      <div className="chat-bot bg-white text-slate-900 w-3/4 p-3 rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px]">
        <div dangerouslySetInnerHTML={{ __html: props.message }}></div>
      </div>
    </>
  );
}
function User(props) {
  return (
    <>
      <div className="chat-user bg-white text-slate-900 w-3/4 p-3 rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] ml-auto">
        <p>{props.message}</p>
      </div>
    </>
  );
}
const ChatBot = ({ setState }) => {
  return (
    <>
      <div className="py-3 px-2 fixed right-0 w-[400px] h-full z-[401]">
        <div className="header-chat p-3 bg-blue-500 rounded-tr-[10px] rounded-tl-[10px] flex justify-between items-center">
          <FiChevronLeft
            size={25}
            className="cursor-pointer"
            onClick={() => setState(false)}
          />
          <h3>Memobot</h3>
          <div></div>
        </div>
        <div className="h-[80%] bg-white bg-opacity-60 overflow-scroll p-2 flex flex-col gap-3">
          {/* chat content */}
          {/* bot chat */}
          <Bot message="<p>Haloo ada yang bisa saya bantu dengan fitur chat bot kami?</p>" />
          {/* user chat */}
          <User message="Hai Memobot apa saja sih destinasi wisata yang ada di kota Semarang?" />
          <Bot message="<p>Kami menemukan destinasi wisata yang cocok untuk anda</p>" />
          <Bot message="<p>1. Kota Lama <br> 2. Lawang Sewu <br> 3. Museum Mandala Bhakti</p>" />
          <User message="Terimakasih Memobot kamu telah membantuku" />
          <Bot message="<p>Sama-sama</p>" />
          <Bot message="<p>Jangan lupa jalan-jalan bareng pacar</p>" />
          <User message="Info purel" />
          <Bot message="<p>Purel ditemukan</p>" />
        </div>
        <div className="bg-green-500 rounded-br-[10px] rounded-bl-[10px] p-3 flex items-center justify-between gap-3">
          <input
            type="text"
            className="bg-white border rounded-[10px] w-full py-2 px-4"
          />
          <MdSend size={28} />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
