export default async function page({params}:{params:Promise<{age:string}>}) {
  return (
    <div>
        <h1>This is age page and the age is:{(await params).age}</h1>
    </div>
  )
}
