import Message from "./messgae";

export default function MessageBuffer(props) {
  return (
    <div className="h-70 w-full pt-10 pb-4 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 max-w-full snap-y">
      {/* 
          ------------------------------------------------------------------------------------------------
          [This part cannoy be implemented due to the lack off time and unability to host the backend]

          - Get the message list from the parent element
          - Iterate through the list and Append Message Components into this div
          - If the recived_msg.owner === user ? send prop.type = send : send prop.type = recieve
          ------------------------------------------------------------------------------------------------ 
    */}

      <Message type="recive" text="Hello" />
      <Message type="send" text="Hey" />
      <Message
        type="recive"
        text="The Frontend is created in Next.JS as it's one of the most popular and easy-to-use Web frameworks which doesn't compromise on usability and developer experience and has the fastest build time among Javascript frameworks. "
      />
      <Message
        type="send"
        text="The backend is created in Actix Web framework in Rust. I used this specific framework due to the availability of both HTTP and WSS support and its blazing-fast speed "
      />

      {props.msg.map((val) => val)}
    </div>
  );
}
