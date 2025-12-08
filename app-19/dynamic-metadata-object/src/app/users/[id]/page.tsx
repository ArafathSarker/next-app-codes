import type { Metadata } from "next";
import { resolve } from "path";
export const generateMetadata = async ({params}:
    {params:Promise<{id:string}>}): Promise<Metadata> =>{
    const {id} = await params;
    return{
        title:`Product id ${id}`
    };
}

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
    return (
    <div>
        <h1>The id of the product is:{id}</h1>
        </div>
  )
}
