import React from "react";

const Card = () => {
  return (
    <div className="bg-slate-100 px-4 pt-6 pb-4">
      <div className="mx-auto w-3/5 aspect-[3/4] bg-slate-200 mb-2 shadow-lg"></div>
      <a className="text-slate-500 underline text-sm">Computers</a>
      <p className="mb-2 text-sm">
        Node.js Разработка серверных веб-приложений на JavaScript
      </p>
      <a className="text-slate-500">Дэвид Хэррон</a>
    </div>
  );
};

export default Card;
