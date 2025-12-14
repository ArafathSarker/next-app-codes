"use client";
import { useParams } from "next/navigation";

export default function page() {
    const {id}= useParams();
  return (
    <div>
        <h1>This is params:{id}</h1>
    </div>
  )
}
