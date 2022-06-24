import Head from "next/head";

import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) {
      router.push("/");
    }
  });

  if (!showChat) {
    return <div></div>;
  }

  return (
    <>
      <Head>
        <title>NextJS Chat</title>
        <meta name="viewport" />
      </Head>
      <div className="background">
        <div className="shadow">
          <ChatEngine
            height="calc(100vh - 200px)"
            userName={username}
            userSecret={secret}
            projectID="87d3054a-9a37-46e7-aca6-022413be6195"
            renderNewMessageForm={() => <MessageFormSocial />}
          />
        </div>
      </div>
    </>
  );
}
