import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    // return NextResponse.redirect(new URL("/",request.url));
    if(request.nextUrl.pathname === "/test"){
       return NextResponse.redirect(new URL("/",request.nextUrl));
    }
}

// export const config = {
//     matcher:"/test",
// }