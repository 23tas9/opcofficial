import { Handlers, PageProps } from "$fresh/server.ts";
import { parseFeed } from "rss/mod.ts";
import { FeedEntry } from "rss/src/types/feed.ts"

interface Data {
	id: string | undefined,
	entries: FeedEntry[]
};

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
		const id = new URL(_req.url).pathname.replace(/\/+$/, "").split('/').pop();;

		const url = "https://deno.com/feed";
		const response = await fetch(url);
		const xml = await response.text();
		const { entries } = await parseFeed(xml);

		return ctx.render({ id, entries });
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <main>
			<h1>{props.data.id}</h1>
			{props.data.entries.map(entry=>(
				<article>
					<h2>{entry.title?.value}</h2>
				</article>
			))}
    </main>
  );
}
