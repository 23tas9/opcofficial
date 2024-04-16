import { PageProps } from "$fresh/server.ts";

export default function Home(props: PageProps){
    return (
        <h1>{props.params.name}</h1>
    )
}