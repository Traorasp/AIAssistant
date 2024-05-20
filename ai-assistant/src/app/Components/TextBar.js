import Image from "next/image"
import { useEffect, useState } from "react"

const TextBar = (prop) => {

    const {addMessage} = prop

    const [prompt, setPrompt] = useState("")
    const changePrompt = (e) => setPrompt(e.target.value)

    useEffect(() => {

    }, [prompt])

    const sendPrompt = () => {
        //Display propmt on message board and clear bar
        addMessage(prompt)
        const inputBar = document.getElementById("promptInput")
        inputBar.value = "" 
        
        //Do API stuff

    }

    return (
        <div className="border border-black bg-violet-100 px-2 flex justify-between rounded-full">
            <textarea 
                id="promptInput" 
                name="prompt" 
                placeholder="Type prompt here..." 
                autoCorrect="on" 
                autoFocus="True"
                maxLength={3000}
                onChange={changePrompt}
                className=" resize-none w-full mx-2 p-2 outline-none bg-transparent"
                >
                {prompt}
            </textarea>
            <button onClick={sendPrompt}>
                <Image className="grow" src="/images/arrow.svg" alt="Send arrow" width={35} height={35}/>
            </button>
        </div>
    )
}

export default TextBar