import { Handlers } from "$fresh/server.ts";

import { ActivityInfo, ActivityInfoType, ActivityInfoProcessType } from "../../tools/utils.ts";

export const handler: Handlers = {
	async GET(req, ctx) {
        const data: { process: ActivityInfoProcessType, info: ActivityInfo} = {
            process: ActivityInfoProcessType.end,
            info: {
                type: ActivityInfoType.offline,
                place: `${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 3)}01`,
                start: new Date(),
                id: "100"
            } 
        }

        const status = await fetch(`${new URL(req.url).origin}/api/postCurrentActivity`, {
            method: "POST",
            body: JSON.stringify(data),
            referrerPolicy: "origin"
        }).then(resp=>{
            console.log(resp);
            return resp.status;
        }).catch(err=>{
            console.log(err);
            return 404;
        });

        const headers = new Headers();

        headers.set("location", "/");

        return new Response(null, { status: 303, headers });
	},
};