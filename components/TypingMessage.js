import { useEffect, useState } from "react";


const TypingMessage = ({ message, onDone, color }) => {
  const [displayMessage, setDisplayMessage] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timer = setTimeout(() => {
        setDisplayMessage((prev) => prev + message[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (onDone) {
      onDone();
    }
  }, [index, message, onDone]);

  return <p style={{ color }}>{displayMessage}</p>;
};

export default TypingMessage;
