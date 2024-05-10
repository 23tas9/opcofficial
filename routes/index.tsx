import ExternalLink from "../components/ExternalLink.tsx";

interface Activist {
  year: number;
  members: number;
};

export default function Home() {
  const activists = JSON.parse(Deno.readTextFileSync("./static/data/activists.json"));
  
  const Contents = [
    {
      "title": "目的",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (  
        <div>
          <p>
            主に、プログラミングをゆるく楽しむサークルです！
          </p>
          <ul>
            <li>プログラミングはわからないけど、興味がある</li>
            <li>programmingの授業でわからないところがある</li>
            <li>自分で何か作品を作りたい！</li>
            <li>競技プログラミングに挑戦してみたい！</li>
          </ul>
          <p>など、初心者から上級者のかたまで、大大大歓迎です！</p>
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
            <li>プログラミングを楽しむ！</li>
            <li>競技プログラミング(AtCoder等)</li>
            <li>アプリ開発(Web/ネイティブ)</li>
            <li>プログラミングの問題を解く</li>
            <li>プログラミングの講座</li>
            <li>情報系資格の勉強会</li>
          </ul>
          <p>
            などなど...<br />
            このサイトも部員がDenoとFreshで制作しています！
          </p>
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
            <li>大阪電気通信大学 四条畷キャンパス(空き教室など)</li>
            <li>大阪電気通信大学 寝屋川キャンパス(空き教室など)</li>
            <li>オンライン(Discord等)</li>
          </ul>
          <p>
            サークルの部室はないので、<br />
            空き教室やオンラインなどで活動しています！<br />
            活動は自由参加ですので気軽に参加してください！
          </p>
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
            {activists["members_of_each_entered"]?.sort((a: Activist, b: Activist)=>{
              return b.year - a.year;
            })?.map((elem: Activist)=>{
              if(elem.year === null) return;
              return <li>{`${elem.year}年度入学生: ${elem.members}`}</li>
            })}
          </ul>
          <p>{`計${activists["total_members"]}名(${activists["latest_update"]}時点)`}</p>
        </div>
      )
    },
    {
      "title": "相談・入部等",
      "image": "https://placehold.jp/640x480.png",
      "imageAlt": "ダミー",
      "content": (
        <div>
          <p>
            <ExternalLink href="https://x.com/oecuprogramming" name="公式X(旧Twitter)"/>のDM、<br />
            または代表や部員などのX(旧Twitter)のDMまでご連絡ください！
          </p>
        </div>
      )
    }
  ];

  return (
    <main>
      {/* hero */}
      <div className="hero">
        <h1 className="hero__title">OECUPC</h1>
        <p className="hero__description">OECU Programming Circle</p>
      </div>

      {/* Content wrapper */}
      <article className="center-align">
        <section>
          {Contents.map(content=>(
            <section className="media-content">
              <section className="media-content__content">
                <h2>{content.title}</h2>
                {content.content}
              </section>
               <figure className="media-content__image">
                <img src={content.image} alt={content.imageAlt} />
              </figure>
            </section>
          ))}
        </section>
      </article>
    </main>
  );
}
