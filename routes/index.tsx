import { Handlers, PageProps } from "$fresh/server.ts";

interface ScheduledEventData {
    id: string,
    type: string,
    location: string,
    name: string,
    start: Date,
    end: Date | undefined,
    status: number
};

interface Data{
    scheduledEvent: ScheduledEventData[] | undefined
};

export const handler: Handlers<Data> = {
	async GET(req, ctx) {
        // KV_DATABASE_URLが設定されているとき(deploy上)ではopenKv();
        const databaseUrl = Deno.env.get("KV_DATABASE_URL");

        const getKv = async ()=> {
            if(databaseUrl) {
                return Deno.openKv(databaseUrl);
            }
            else{
                return Deno.openKv();
            }
        };

        const kv = await getKv();

        const data = await kv.get<ScheduledEventData[]>(["scheduledEvent"]);

        // console.log(data);

        if(!data.value){
            return ctx.render({ scheduledEvent: undefined });
        }
        
        return ctx.render({ scheduledEvent: data.value });
	},
};

export default function Home({ data }: PageProps<Data>){

    console.log(data.scheduledEvent.sort((a, b)=>{
        return a.status - b.status;
    }));

    return (
        <main>
            <div>
                <h1 className="center-align">ホーム</h1>
                <div>
                    <h2>予定されているイベント</h2>
                    <article className="scheduled-event">
                    {data.scheduledEvent.length <= 0 ?
                        <section className="scheduled-event__content center-align">
                            <h3>現在予定されているイベントはありません。</h3>
                        </section>
                        :data.scheduledEvent.sort((a, b)=>{
                            return b.status - a.status;
                        }).map(event=>(
                        <section className={
                            "scheduled-event__content" + 
                            (event.status === 2 ? " scheduled-event__content--active":"")
                        }>
                            <h3>{event.name}</h3>
                            <p>場所: {event.location}</p>
                            <p>開始予定時刻: {event.start.toLocaleString("ja-JP")}</p>
                            <p>終了予定時刻: {event.end === undefined ?
                                "未定":event.end.toLocaleString("ja-JP")
                            }</p>
                        </section>
                    ))}
                    </article>
                </div>
                <div>
                    <h2>お知らせ</h2>
                    <p>
                        ここにお知らせが表示
                    </p>
                </div>
                <div>
                    <h2>サークルについて</h2>
                    <p>主に、プログラミングをゆるく楽しむサークルです！</p>
                    <ul>
                        <li>プログラミングはわからないけど、興味がある</li>
                        <li>programmingの授業でわからないところがある</li>
                        <li>自分で何か作品を作りたい！</li>
                        <li>競技プログラミングに挑戦してみたい！</li>
                    </ul>
                    <p>など、初心者から上級者のかたまで、大大大歓迎です！</p>
                    <p>詳しくは<a href="/about">About</a>へ！</p>
                </div>
            </div>
        </main>
    );
}