export default async function Page({params}:{params:Promise<{id:string}>}) {
  return (
    <div>
      <h1>The id of the user is: {(await params).id}</h1>
    </div>
  );
}
