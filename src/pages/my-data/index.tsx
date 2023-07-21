import { DataContent } from "@/components/DataContent/DataContent";
import { Title } from "@/components/UI/Title/Title";
import React from "react";

const MyData = () => {
  return (
    <div className="container">
      <Title>Мои данные</Title>
      <DataContent />
    </div>
  );
};

export default MyData;
