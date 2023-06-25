//import { MultiChatSocket, MultiChatWindow, UseMultiChatLogic } from 'react-chat-engine-advanced'
import { useEffect, Fragment } from "react";
const ChatsPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = '89SpUHRfC5DNJ7WjP7z7o';
    script.defer = true;
    document.body.appendChild(script);

    window.chatbaseConfig = {
      chatbotId: "89SpUHRfC5DNJ7WjP7z7o",
    }

    // const chatProps = useMultiChatLogic('72d84f8a-83fc-435b-905f-e3717ad5086b', 
    //props.user.username,
    //props.user.secret
    return () => {
      <Fragment>
        <div><h1>Welcome ,{username}</h1></div>
        chats...
        // Remove the script when the component is unmounted
        document.body.removeChild(script);

        <iframe
          src="https://www.chatbase.co/chatbot-iframe/89SpUHRfC5DNJ7WjP7z7o"
          width="100%"
          height="700"
          frameborder="0"
        ></iframe>



      </Fragment>

    }
  }, []);
};

export default ChatsPage;