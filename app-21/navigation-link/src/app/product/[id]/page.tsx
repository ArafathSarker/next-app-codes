import Link from "next/link";

export default async function page({params}:{params:Promise<{id:string}>}) {
    
    const {id} = await params;
 
    return (
    <div>
        <h1>This is product id page.</h1>
        <h2>Your product id is :{id}</h2>
        <Link href="/product">product page</Link>
    </div>
  )
}
