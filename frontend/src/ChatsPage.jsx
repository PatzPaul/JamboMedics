import { useEffect, Fragment } from "react";
import PersonalizedHealthcare from "./PersonalizedHealthcare";

// Define a separate functional component to render the chatbot
const ChatBotRenderer = () => {
  return (
    <Fragment>
      <div>
        {/*Healthcare list */}
          <PersonalizedHealthcare />
        
        <h1>Welcome, Try Our Personalized Treatments below</h1>
      </div>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/xPsKM5kOYPN9D_xGUTwLC"
        width="100%"
        style={{ height: "100%", minHeight: "700px", border: "0" }}
      ></iframe>
    </Fragment>
  );
};

const ChatsPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "xPsKM5kOYPN9D_xGUTwLC";
    script.defer = true;
    document.body.appendChild(script);

    window.chatbaseConfig = {
      chatbotId: "xPsKM5kOYPN9D_xGUTwLC",
    };

    return () => {
      // Remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  // Define the username (replace 'John Doe' with the actual username)
// const username = "John Doe";

  return <ChatBotRenderer />;
};

export default ChatsPage;
