import cn from 'classnames';

export type HeaderLink = {
  id: string;
  title?: string | null | undefined;
  link: string;
  menuTitle?: string | null | undefined;
}

type HeaderProps = {
  nodes: Array<HeaderLink>;
}

const Header = (props: HeaderProps) => (
  <header className="container flex justify-between mx-auto px-4">
    <a className="header-logo" href="/">
      <img
        src="/logo.svg"
        className="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
    </a>
    <ul className="flex my-auto">
      {props.nodes.map((item: HeaderLink, idx: number) => (
        <li className={cn({"ml-2" : idx !== 0})} id={item.id}>
          <a href={item.link} className="px-4 py-2 block rounded-md bg-yellow-200 hover:bg-yellow-300">{item.title}</a>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
