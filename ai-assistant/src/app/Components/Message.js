const Message = (props) => {

    const {sender, message} = props

    const sharedCSS = "p-2 border border-black rounded-2xl max-w-full " 

    const userCSS = "bg-violet-100 text-end w-fit " + sharedCSS
    const botCSS = "bg-violet-300 " + sharedCSS

    const textToSide = sender === 'user' ? "flex justify-end" : "flex justify-start"

    return (
        <div className={textToSide}>
            <div className={sender === 'user' ? userCSS : botCSS}>
            {message}
            </div>
        </div>
    )
}

export default Message