import { useEffect } from "react"
import Message from "./Message"

const MessageBoard = (props) => {

    const { messages } = props

    useEffect(() => {
        const messageBoard = document.getElementById("messageBoard")
        messageBoard.scrollTop = messageBoard.scrollHeight
        
        
    }, [messages])

    

    return (
        <div id="messageBoard" className="flex flex-col gap-2 my-4 h-full h-auto w-full overflow-scroll hidebar">
            {
                messages ? messages.map((message, count) => (
                    <Message key={message[0] + "-" + count} sender={message[0]} message={message[1]} />
                )) : ""
            }
        </div>
    )
}

export default MessageBoard