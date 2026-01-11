import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
//    const headers = new Headers(request.headers);
//    return new Response(headers.get("Authorization"));
     const headerslist = await headers();
     return new Response(`<h1>${headerslist.get("Authorization")}</h1>`,{
        headers:{
            "Content-Type":"text/html",
        },
     });
}