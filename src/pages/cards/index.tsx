import { Title } from "@/components/UI/Title/Title";
import { TITLE } from "@/utils/constants";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const CardItems = dynamic(() => import("@/components/CardItems/CardItems"), {
  ssr: false,
});

const Cards = () => {
  return (
    <>
      <Head>
        <title>{`${TITLE} | Привязанные карты`}</title>
      </Head>
      <div className="container">
        <Title>Привязанные карты</Title>
        <CardItems />
      </div>
    </>
  );
};

export default Cards;
