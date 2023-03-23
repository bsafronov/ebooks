import { FC } from "react";

interface ErrorProps {
  text?: string;
}

const Error: FC<ErrorProps> = ({ text = "Something went wrong..." }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mt-4 mb-2">{text}</h1>
      <img className="w-1/2 shadow-2xl" src="./img/sad-cat.jpg" alt="sad cat" />
    </div>
  );
};

export default Error;
