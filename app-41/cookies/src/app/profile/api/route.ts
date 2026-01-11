import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
//    const headers = new Headers(request.headers);
//    return new Response(headers.get("Authorization"));
     const headerslist = await headers();
     const theme =  request.cookies.get("theme");
     console.log(theme);
     const cookiesStore = await cookies();
     cookiesStore.set("color","blue");
     console.log(cookiesStore.get("color"));
     return new Response(`<h1>Hello how are you</h1>`,{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=blue",
        },
     });
}
