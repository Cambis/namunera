import cn from "classnames";

import type { HeaderLink } from "@/types";
type HeaderProps = {
  nodes: HeaderLink[];
};

const Header = ({ nodes }: HeaderProps) => (
  <header className="bg-gray-50">
    <div className="container flex justify-between mx-auto px-4">
      <a className="header-logo" href="/">
        <img
          src="/logo.svg"
          className="w-20 h-20 my-4"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
      </a>
      <ul className="flex my-auto">
        {nodes.map((item: HeaderLink, idx: number) => (
          <li className={cn({ "ml-2": idx !== 0 })} id={item.id}>
            <a
              href={item.link}
              className="px-4 py-2 block rounded-md bg-yellow-200 hover:bg-yellow-300"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </header>
);

export default Header;
