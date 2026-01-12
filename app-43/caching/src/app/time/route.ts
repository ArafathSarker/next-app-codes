import { NextRequest } from "next/server";
export const dynamic = "force-static";
export const revalidate = 10;
export async function GET(request:NextRequest){
       return Response.json({time: new Date().toLocaleTimeString()});
}