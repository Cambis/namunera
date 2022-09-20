import { useState } from "preact/hooks";
import { Button } from "@/components";

type CounterProps = {
  start: number;
};

const Counter = ({ start }: CounterProps) => {
  const [count, setCount] = useState(start);
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
};

export default Counter;
