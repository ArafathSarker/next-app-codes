export default async function page({params}:{params:Promise<{slug:string[]}>}) {
    const {slug} = await params;
  return (
    <div>
      {
        slug.map(item=>(
              <h1 key={item}>{item}</h1>
        ))
      }
    </div>
  )
}
