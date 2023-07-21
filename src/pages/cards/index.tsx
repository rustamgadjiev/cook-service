import { Title } from "@/components/UI/Title/Title";
import dynamic from "next/dynamic";
import React from "react";

const CardItems = dynamic(() => import("@/components/CardItems/CardItems"), {
  ssr: false,
});

const Cards = () => {
  return (
    <div className="container">
      <Title>Привязанные карты</Title>
      <CardItems />
    </div>
  );
};

export default Cards;
