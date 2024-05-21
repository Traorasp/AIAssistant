'use client'


import { useEffect, useState } from "react";
import MessageBoard from "./Components/MessageBoard"
import TextBar from "./Components/TextBar"

export default function Home() {

  const [messages, setMessages] = useState([])
  const changeMessages = (messages) => setMessages(messages)
  
  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <main className="flex flex-col p-3 h-screen">
      <div className="h-8">
        <h1 className="font-bold text-3xl text-center border-b-2 border-black">AI ASSISTANT</h1>
      </div>
      <MessageBoard messages={messages} />
      <TextBar changeMessages={changeMessages} messages={messages}/>
      <div>
        <p className="font-thin italic text-center text-gray-500 mt-1">AI Assistant by Miguel Solano Paz</p>
      </div>
    </main>
  );
}
