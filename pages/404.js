import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Erorr = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <Head>
        <title>404 || Erorr</title>
      </Head>
      Page not found &#128579;
    </div>
  );
};

export default Erorr;
