import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { MdSend } from "react-icons/md";
function Bot(props) {
  return (
    <>
      <div className="chat-bot bg-sky-600 text-white w-3/4 px-3 py-2 rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px]">
        <div dangerouslySetInnerHTML={{ __html: props.message }}></div>
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
          <div className="bg-white border-2-t  mt-auto md:mb-5 p-3 flex items-center justify-between gap-3">
            <input
              type="text"
              className="bg-white  rounded-[10px] w-full py-2 px-4"
              placeholder="Apa yang ingin anda tanyakan?"
            />
            <button className="bg-sky-600 rounded-full p-3">
              <MdSend fill="#FFFFFF" size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
