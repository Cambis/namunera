import { PageProps } from "$fresh/server.ts";

const Greet = (props: PageProps) => <div>Hello {props.params.name}</div>;

export default Greet;
