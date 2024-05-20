import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const TextBar = (prop) => {

    const {addMessage} = prop

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

    const sendPrompt = () => {
        if(prompt.trim() === "") return
        //Display propmt on message board and clear bar
        addMessage([0, prompt])
        const inputBar = document.getElementById("promptInput")
        inputBar.value = "" 
    
        //API stuff

    }

    return (
        <div className="border border-black bg-violet-100 px-2 py-1 flex justify-between rounded-full h-14">
            <textarea 
                id="promptInput" 
                name="prompt" 
                placeholder="Type prompt here..." 
                autoCorrect="on" 
                autoFocus="True"
                maxLength={3000}
                onChange={changePrompt}
                className="hidebar resize-none w-full mx-2 p-2 outline-none bg-transparent"
                >
                {prompt}
            </textarea>
            <button ref={buttonRef} id="promptButton" onClick={sendPrompt}>
                <Image className="grow" src="/images/arrow.svg" alt="Send arrow" width={35} height={35}/>
            </button>
        </div>
    )
}

export default TextBar