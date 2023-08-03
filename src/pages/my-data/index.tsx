import { DataContent } from "@/components/DataContent/DataContent";
import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import Head from "next/head";
import React from "react";

const MyData = () => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Мои данные`}</title>
      </Head>
      <div className="container">
        <Title>Мои данные</Title>
        <DataContent />
      </div>
    </>
  );
};

export default MyData;
