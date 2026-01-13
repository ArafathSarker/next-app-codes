export async function Product() {

  await new Promise((resolve)=> setTimeout(resolve,2000));
  return (
    <div>
        <h1>Products for the users.</h1>
    </div>
  )
}
