import { useState } from "preact/hooks";
import { Button } from "@/components";
import cn from 'classnames';

const SubscribeButton = () => {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <div className="my-5">
      <Button
        className={cn("p-4 mr-2 hover:bg-red-600 hover:text-white border-1 rounded-md", {
          "bg-white": !subscribe,
          "bg-red-700": subscribe,
          "text-white": subscribe,
        })}
        onClick={() => {
          setSubscribe(!subscribe);
        }}
      >
        <p className="font-bold text-xl">{subscribe ? "Subscribed" : "Subscribe"}</p>
      </Button>
    </div>
  );
};

export default SubscribeButton;
