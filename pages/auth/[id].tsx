import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

const Id: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>Login Page with id = {id}</h1>
    </>
  );
};

export default Id;
