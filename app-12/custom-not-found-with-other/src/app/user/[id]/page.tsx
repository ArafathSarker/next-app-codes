
export default async function page({params}:{params:Promise<{id:string}>}) {
  return (
    <div>
        <h1>hello ths is user id page.</h1>
        <h2>id:{(await params).id}</h2>
    </div>
  )
}
