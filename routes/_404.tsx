import { Head } from "$fresh/runtime.ts";

export default function Error404() {
	return (
		<>
			<Head>
				<title>404 - Page not found</title>
			</Head>
			<main className="hero center-align">
				<h1 className="hero__title">404 - Page not found</h1>
				<p className="hero__description">
					お探しのページは見つかりませんでした。
				</p>
				<a href="/">ホームに戻る</a>
			</main>
		</>
	);
}
