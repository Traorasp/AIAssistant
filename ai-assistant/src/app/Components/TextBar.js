import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const API_KEY = 'sk-proj-9MLGZ4EQIGac83Od39PxT3BlbkFJURP7cjmus8g6cbr7IK0u'

const TextBar = (prop) => {

    const {changeMessages, messages} = prop

    const [prompt, setPrompt] = useState("")
    const changePrompt = (e) => setPrompt(e.target.value)
    const buttonRef = useRef(null)


    useEffect(() => {
        
    }, [prompt])

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            buttonRef.current.click()
            event.preventDefault()
        }
    }

    useEffect(() => {
        const textBar = document.getElementById('promptInput')
        textBar.addEventListener('keypress', handleKeyPress)

        return () => {
            textBar.removeEventListener('keypress', handleKeyPress)
        }
    }, [])



    const sendPrompt = async () => {
        if(prompt.trim() === "") return
        const newMessage = {
            message: prompt,
            direction: 'outgoing',
            sender: "user"
        }
        let allMessages = [...messages, newMessage]
        changeMessages(allMessages)
        setPrompt("")

        await sendToChatGPT(allMessages)
    }

    const sendToChatGPT = async(allMessages) => {
        let apiMessages = allMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
              role = "assistant";
            } else {
              role = "user";
            }
            return { role: role, content: messageObject.message}
          });

        const systemMessage = { 
            role: "system",
            content: "Explain all concepts like I am 10 years old."
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
              systemMessage,  // The system message DEFINES the logic of our chatGPT
              ...apiMessages // The messages from our chat with ChatGPT
            ]
          }

          await fetch("https://api.openai.com/v1/chat/completions", 
          {
            method: "POST",
            headers: {
              "Authorization": "Bearer " + API_KEY,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
          }).then((data) => {
            return data.json();
          }).then((data) => {
            const botMessage = {
                message: data.choices[0].message.content,
                sender: "ChatGPT"
            }
            changeMessages([...allMessages, botMessage])
          });
    }

    return (
        <div className="border border-black bg-violet-100 px-2 py-1 flex justify-between rounded-full h-14">
            <textarea 
                id="promptInput" 
                name="prompt" 
                placeholder="Type prompt here..." 
                autoCorrect="on" 
                autoFocus="true"
                maxLength={3000}
                onChange={changePrompt}
                className="hidebar resize-none w-full mx-2 p-2 outline-none bg-transparent"
                value={prompt}
                >
            </textarea>
            <button ref={buttonRef} id="promptButton" onClick={sendPrompt}>
                <Image className="grow" src="/images/arrow.svg" alt="Send arrow" width={35} height={35}/>
            </button>
        </div>
    )
}

export default TextBar