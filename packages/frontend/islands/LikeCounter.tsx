import { useState } from "preact/hooks";
import { Button } from "@/components";

type CounterProps = {
  start: number;
};

const LikeCounter = ({ start }: CounterProps) => {
  const [count, setCount] = useState(start);
  const [liked, setLiked] = useState(false);

  return (
    <div class="flex gap-2 w-full my-5">
      <Button onClick={() => {
        setLiked(!liked);
        liked ? setCount(count - 1) : setCount(count + 1)
      }}>
      {liked ? 
       <img
        src="/thumbs-up.svg"
        className="w-6 h-6"
        alt="Don't smash that like button"
      />
      : <img
        src="/social-network.svg"
        className="w-6 h-6"
        alt="Smash that like button"
      />
      }
      <p class="flex-grow-1 font-bold text-xl pl-2"> {count}</p> 
      </Button>
    </div>
  );
};

export default LikeCounter;
