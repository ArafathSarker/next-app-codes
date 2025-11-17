import {notFound} from "next/navigation";
export default async function page({params}:{params:Promise<{id:string,age:string}>}) {
  const {id,age} = await params;
  return (
    <div>
        <h1>{ (parseInt(id) < 1000 ) ? `your id is:${id}` : "this is wrong page"}</h1>
        <h2>{(parseInt(age) < 100 ) ? `your age is:${age}` : notFound()}</h2>
    </div>
  )
}
