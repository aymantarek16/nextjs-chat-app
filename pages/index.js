import Head from "next/head";

import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.lenght === 0 || secret.lenght === 0) return;
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "1d61b216-f1b3-4a2c-8a23-cc1adb0b65e1" } }
      )
      .then((r) => router.push("/chats"));
  };
  return (
    <>
      <Head>
        {/* <title>NextJS Chat</title> */}
        <title>Stay Nrm</title>
        <meta name="viewport" />
      </Head>
      <div className="background">
        <div className="auth-container">
          <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
            <div className="auth-title">NextJS Chat</div>

            <div className="input-container">
              <input
                type="text"
                className="text-input"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                type="password"
                className="text-input"
                placeholder="Password"
                onChange={(e) => setSecret(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-button">
              Login / Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
