import { redirect } from "next/navigation";
export default async function page({params}:{params:Promise<{productId:string}>}) {
    const {productId} = await params;
  return (
    <div>
      <h1>{parseInt(productId) > 100 ? redirect("/") : productId }</h1> 
    </div>
  )
}
