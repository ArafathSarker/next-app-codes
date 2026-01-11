import { comments } from "./data";
export async function GET()
{
    return Response.json(comments);
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

