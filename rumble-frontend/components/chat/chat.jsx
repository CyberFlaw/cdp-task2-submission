import Dashboard from "./dashboard";
import ChatArea from "./chatArea";

export default function Chat(props) {
  return (
    <div className="h-screen w-full bg-black flex flex-row items-center justify-center overflow-y-hidden">
      <Dashboard user={props.user} />
      <ChatArea user={props.user} />
    </div>
  );
}
