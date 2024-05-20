import Image from "next/image"

const TextBar = () => {
    return (
        <div className="border border-black bg-violet-100 px-2 flex justify-between rounded-full">
            <textarea 
                id="promptInput" 
                name="prompt" 
                placeholder="Type prompt here..." 
                autoCorrect="on" 
                autoFocus="True"
                maxLength={3000}
                className=" resize-none w-full mx-2 p-2 outline-none bg-transparent"
                >
            </textarea>
            <button>
                <Image className="grow" src="/images/arrow.svg" alt="Send arrow" width={35} height={35}/>
            </button>
        </div>
    )
}

export default TextBar