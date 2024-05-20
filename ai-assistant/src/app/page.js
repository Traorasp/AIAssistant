import MessageBoard from "./Components/MessageBoard"
import TextBar from "./Components/TextBar"

export default function Home() {
  return (
    <main className="flex flex-col p-3">
      <div className="h-8">
        <h1 className=" font-bold text-3xl">AI ASSISTANT</h1>
      </div>
      <MessageBoard />
      <TextBar />
      <div>
        <p className="font-thin italic">AI Assistant by Miguel Solano Paz</p>
      </div>
    </main>
  );
}
