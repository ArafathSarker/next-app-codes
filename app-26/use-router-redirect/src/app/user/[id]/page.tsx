"use client";
import { useRouter } from "next/navigation";
export default function page() {
    const route= useRouter();
    const handlebtn = ()=>{
              route.push("/");
    }
    return (
    <div>
        <h1>
            This is user id page.
        </h1>
        <button onClick={handlebtn}>Click</button>
    </div>
  )
}
