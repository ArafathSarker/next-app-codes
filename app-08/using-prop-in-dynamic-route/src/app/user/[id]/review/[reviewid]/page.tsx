export default async function page({params}:{params:Promise<{id:string,reviewid:string}>}) {
  return (
    <div>
        <h1>The id and reviewid is :{(await params).id +","+(await params).reviewid}</h1>
    </div>
  )
}
