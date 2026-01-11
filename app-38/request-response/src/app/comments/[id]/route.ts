import { comments } from "../data";
import { NextResponse } from "next/server";
export async function GET(_request:Request,{params}:{params: Promise<{ id: string}> }){
     const {id} = await params;
     const value = comments.find((items) => items.id === parseInt(id));
     return Response.json(value);
}


export async function PATCH(request:Request,{params}:{params: Promise<{ id: string}> }){
   const {id} = await params;
   const data = await request.json();
   const index = comments.findIndex(item => item.id === parseInt(id));
   comments[index].message = data.message;
   return Response.json(comments[index]);
}


export async function DELETE(_request:Request,{params}:{params: Promise<{ id: string}> })
{
     const {id} = await params;
     const index = comments.findIndex(item => item.id === parseInt(id));
     if (index === -1) {
    return NextResponse.json(
      { error: "Comment not found" },
      { status: 404 }
    );
  }

  const deletedComment = comments[index];
  comments.splice(index, 1);

  return NextResponse.json(deletedComment, { status: 200 });

}