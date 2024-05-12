import { PageProps } from "$fresh/server.ts";

import { BlogArticle, BlogType } from "../../components/BlogArticle.tsx";

export default function Home(props: PageProps){
    return <BlogArticle id={props.params.name} type={BlogType.blog}/>
}