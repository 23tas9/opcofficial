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
    },
    {
      "title": "活動内容",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
    },
    {
      "title": "活動場所",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
    },
    {
      "title": "活動人数",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      )
    },
    {
      "title": "相談・入部等",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
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
            <section>
              <h2>{content.title}</h2>
              {content.content}
            </section>
             <figure>
              <img src={content.image} alt={content.imageAlt} />
            </figure>
          </section>
        ))}
      </article>
    </main>
  );
}
