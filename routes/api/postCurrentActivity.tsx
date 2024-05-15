import { Handlers } from "$fresh/server.ts";
import { ActivityInfo, ActivityInfoProcessType } from "../../tools/utils.ts";

interface Data{
    body: string
};

const allowedHostnames = [
    "localhost:8000",
    "opcofficial.deno.dev"
];

export const handler: Handlers<Data> = {
	async POST(req, ctx) {
        console.log("requested: ");
        console.log(req);

        if(!req.headers.has("host")) return new Response(null, { status: 400 });
        if(!allowedHostnames.includes(req.headers.get("host") || "")) return new Response(null, { status: 400 });

        const reqData: {
            process: ActivityInfoProcessType,
            info: ActivityInfo
        } = await req.json();
        
        const kv = await Deno.openKv();
        const activities = await kv.get<ActivityInfo[]>(["activities"]);

        const data: ActivityInfo[] = [];

        if(reqData.process === ActivityInfoProcessType.start){
            // まだvalueがないとき
            if(!activities.value){
                data.push(reqData.info);
            }else{
                data.push(...activities.value, reqData.info);
            }
        }

        if(reqData.process === ActivityInfoProcessType.end){
            activities.value?.map(info=>{
                if(info.id === reqData.info.id){
                    console.log(`ignore: ${info.id}`);
                    return;
                }

                data.push(info);
            });
        }

        await kv.set(["activities"], data);

        const headers = new Headers();
        return new Response(null, { status: 200, headers });
	},
};