import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
