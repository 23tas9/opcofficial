import { Handlers, PageProps } from "$fresh/server.ts";

import { ActivityInfo } from "../tools/utils.ts";

interface Data{
    currentActivities: ActivityInfo[] | undefined
};

export const handler: Handlers<Data> = {
	async GET(req, ctx) {
        const kv = await Deno.openKv("test.db");

        const data = await kv.get<[]>(["activities"]);

        //console.log(data);

        if(!data.value){
            return ctx.render({ currentActivities: undefined });
        }
        
        return ctx.render({ currentActivities:
            data.value
        });
	},
};

export default function Home({ data }: PageProps<Data>){
    //:console.log(data.currentActivities);

    return (
        <main>
          {/* hero */}
          <div className="hero">
            <h1 className="hero__title">OECUPC</h1>
            <p className="hero__description">OECU Programming Circle</p>
          </div>
          <div>
            <h2>現在の活動</h2>
            <ul>
                {data.currentActivities?.map(activity=>(
                    <li>
                        <h3>{activity.type}</h3>
                        <p>{activity.place}</p>
                        <p>{new Date(activity.start).toLocaleString("ja-JP")}</p>
                    </li>
                ))}
            </ul>
          </div>
          <div>
            <h2>お知らせ</h2>
            <ul>
                <li></li>
            </ul>
          </div>
        </main>
    );
}