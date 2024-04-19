import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { parseFeed, Feed } from "rss/mod.ts";

interface Data {
	feed: Feed
};

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const url = "https://raw.githubusercontent.com/tas9n/opcofficial/fresh_dev/static/blog.rss";
		const response = await fetch(url);
		const xml = await response.text();
		const feed = await parseFeed(xml);

		return ctx.render({ feed });
	},
};

export default function Home({ data }: PageProps<Data>) {
	const feed: Feed = data.feed;

	const ImageTypes = [
		"image/png",
		"image/jpeg"
	];

	console.log(feed);

	return (
		<>
			<Head>
				<link rel="stylesheet" href="/styles/css/blog.css" />
			</Head>
			<main>
				<h1 className="center-align">{feed.title.value}</h1>

				<article className="article-card grid-container">
					{feed.entries.map(entry => (
						<section className="article-card__item">
							<a href={`/blogs/${entry.id.replace('oecu-pc://', '')}`}>
								{entry.attachments?.map(attachment => (
									<figure className="article-card__attachment">
										{
											(ImageTypes.includes(attachment.mimeType || "")) ?
												<img className="article-card__attachment__image" src={attachment.url} alt="" /> : <></>
										}
										<figcaption className="article-card__description">
											<h3 className="article-card__item__title">{entry.title?.value}</h3>
											<p>{entry.updated?.toString()}</p>
											<p>{entry.author?.name}</p>
										</figcaption>
									</figure>
								))}
							</a>
						</section>
					))}
				</article>
			</main>
		</>
	);
}
