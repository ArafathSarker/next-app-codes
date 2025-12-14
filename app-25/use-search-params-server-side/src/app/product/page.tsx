export default async function page({searchParams}:{searchParams:Promise<{age?:number,name?:string}>}) {
    const {name,age} = await searchParams;
  return (
    <div>
        <h1>This is product page.</h1>
        <h2>name:{name},age:{age}</h2>

    </div>
  )
}
