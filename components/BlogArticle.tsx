import { Head } from "$fresh/runtime.ts";
import { render } from "https://deno.land/x/gfm@0.6.0/mod.ts";

import { MDParser } from "../tools/MDParser.ts";
import RenderBlog from "../tools/RenderBlog.tsx";

export enum BlogType {
    blog = "blog",
    activitie = "activitie"
};

interface Data{
    id: string,
    type: BlogType
};

const getBlogTypeNameFromType = (type: BlogType) =>{
    return type === BlogType.blog ? "ブログ":"活動"
};

export function BlogArticle({ id, type }: Data) {
    const path = `./static/post/activitie/${id}/index.md`;

    const typeName = getBlogTypeNameFromType(type);

    try{
        const text = Deno.readTextFileSync(path);

        const md = MDParser(text);

        const body = render(md.body);

        return RenderBlog(body, md.meta);
    }catch(e){
        return (
            <>
                <Head>
                    <title>404 - Page not found</title>
                </Head>
                <main className="hero center-align">
                    <h1 className="hero__title">404 - Page not found</h1>
                    <p className="hero__description">
                        お探しの{typeName}は見つかりませんでした。
                    </p>
                    <a href={`/${type}`}>{typeName}一覧に戻る</a>
                </main>
            </>
        );
    }
}