export const dynamicParams = false;
export async function generateStaticParams(){
    return [
    { id: "1" },
    { id: "2" },
    { id: "3" },   // must be a string
  ];
}
export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
  return (
    <>
         Product {id} details rendered at {new Date().toLocaleTimeString()};
    </>
  )
}