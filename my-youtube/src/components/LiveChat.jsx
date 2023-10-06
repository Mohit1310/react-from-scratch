import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  useEffect(() => {
    const i = setInterval(() => {
      //* API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20).split(10).join(" ") + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div
        className={
          isDarkMode
            ? "mx-2 p-2 border border-white w-full h-[500px] bg-[#0f0f0f] rounded-lg overflow-y-scroll flex flex-col-reverse"
            : "mx-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse"
        }
      >
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className={
          isDarkMode
            ? "w-full p-2 ml-2 border border-white rounded-lg flex gap-3"
            : "w-full p-2 ml-2 border border-black rounded-lg flex gap-3"
        }
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("Form submitted");
          dispatch(
            addMessage({
              name: "Mohit Dayma",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className={
            isDarkMode
              ? "w-full p-1 px-2 border border-white bg-[#0f0f0f] text-white"
              : "w-full p-1 px-2 border border-black"
          }
          placeholder="Type your message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-300 rounded-lg">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
