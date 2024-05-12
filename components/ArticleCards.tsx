import { Head } from "$fresh/runtime.ts";
import { Feed } from "rss/mod.ts";

interface Data{
    feed: Feed
};

export default function ArticleCards({ feed }: Data){
    return (
		<>
			<Head>
				<link rel="stylesheet" href="/styles/css/blog.css" />
			</Head>
			<main>
				<h1 className="center-align">ブログ</h1>
				{/*<h1 className="center-align">{feed.title.value}</h1>*/}

				<article className="article-cards grid-container">
					{feed.entries.map(entry => (
						<section className="article-cards__item">
							<a href={`/blog/${entry.id.replace('oecupc-blog://', '')}`}>
								<figure className="article-cards__item__attachment">
									{
											<img className="article-cards__item__attachment__image" src={entry.attachments?.at(0)?.url} alt="" />
									}
									<figcaption className="article-cards__item__description">
										<h3 className="article-cards__item__title">{entry.title?.value}</h3>
										<p>{
											entry.updated?.toLocaleString("ja-jp", {
												year: "numeric",
												month: "2-digit",
												day: "2-digit"
											}).replaceAll('/', '-')
										}</p>
										<p>
											{(0 < (entry.author?.name?.length || 0)) ? "執筆者:": ""}
											{entry.author?.name}
										</p>
									</figcaption>
								</figure>								
							</a>
						</section>
					))}
				</article>
			</main>
		</>
	);
}