import { comments } from "./data";
import { NextRequest } from "next/server";
export async function GET(request:NextRequest)
{
   const searchParams = request.nextUrl.searchParams;
   const query = searchParams.get("query");
   const filterComments = query ? comments.filter(item => item.message.includes(query))
   : comments ;
   return Response.json(filterComments);
}
export async function POST(request:Request){
    const Comment = await request.json();
    const newComment = {
        id:comments.length + 1,
        message:Comment.message,
    }
    comments.push(newComment);
    return new Response(JSON.stringify(comments),{
           headers:{"Content-Type":"Application/json"},
           status:201,

    });
}

