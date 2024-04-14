export default function Home() {
  const Contents = [
    {
      "title": "目的",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (  
        <div>
          <h2>目的</h2>
          <p>
            主に、プログラミングをゆるく楽しむサークルです！
          </p>
          <ul>
            <li>プログラミングはわからないけど、興味がある</li>
            <li>programmingの授業でわからないところがある</li>
          </ul>
          <p>などの初心者や</p>
        </div>
      )
    }
  ]

  return (
    <main>
      {/* hero */}
      <div>
        <h1>OECUPC</h1>
        <p>OECU Programming Circle</p>
      </div>

      {/* Content wrapper */}
      <article>
          {Contents.map(content=>(
            <section>
              <h2>{content.title}</h2>
              {content.content}

              <figure>
                <img src={content.image} alt={content.imageAlt} />
              </figure>
            </section>
          ))}
      </article>
    </main>
  );
}
