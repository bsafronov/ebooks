import { FC } from "react";

interface CounterProps {
  count?: number;
}

const Counter: FC<CounterProps> = ({ count = 0 }) => {
  return (
    <h5 className="font-bold text-sm text-center my-4">
      Found {count} results
    </h5>
  );
};

export default Counter;
