import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    // return NextResponse.redirect(new URL("/",request.url));
    // if(request.nextUrl.pathname === "/test"){
    //    return NextResponse.redirect(new URL("/",request.nextUrl));
    // }
    const response = NextResponse.next();
    const theme = request.cookies.get("theme");
    if(!theme)
    {
        response.cookies.set("theme","dark");
        
    }
    response.headers.set("custom-header","custom-value");
    return response;
}

// export const config = {
//     matcher:"/test",
// }