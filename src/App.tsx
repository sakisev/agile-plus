import React, { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import { Avatar, Card, Input, Typography } from "antd";
import "antd/dist/antd.css";

const client = new w3cwebsocket("ws://127.0.0.1:8000");

function App() {
  const [userName, setUserName] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name !== null) {
      
      setUserName(name);
      setIsAuthed(true);
    }

    client.onopen = () => {
      console.log("WebSocket client connected");
    };
  }, []);

  const handleUserAuth = (userName: string) => {
    localStorage.setItem("userName", userName);

    setIsAuthed(true);
    setUserName(userName);
  };

  const onClickSend = (value: string) => {
    console.log(userName);
    
    client.send(JSON.stringify({ type: "message", msg: value }));
  };

  return (
    <div className="main">
      {isAuthed ? (
        <>
          <Typography>
            Hello {userName} why don't you try clicking the button to see what
            happens
          </Typography>
          <button onClick={() => onClickSend("niaaa")}>niaaaa</button>
        </>
      ) : (
        <div style={{ padding: "200px 40px" }}>
          <Input.Search
            placeholder="Enter your name"
            enterButton="Enter"
            size={"large"}
            onSearch={(value) => handleUserAuth(value)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
