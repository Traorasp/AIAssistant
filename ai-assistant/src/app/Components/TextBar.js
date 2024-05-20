const TextBar = () => {
    return (
        <div>
            <textarea 
                id="promptInput" 
                name="prompt" 
                placeholder="Type prompt here..." 
                autoCorrect="on" 
                autoFocus="True"
                maxLength={3000}
                >
                
            </textarea>
        </div>
    )
}

export default TextBar