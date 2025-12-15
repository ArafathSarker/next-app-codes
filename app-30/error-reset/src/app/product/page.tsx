async function fetchData() {
  const randomFail = Math.random() < 0.7

  if (randomFail) {
    throw new Error('API failed')
  }

  return 'Data loaded successfully'
}

export default async function Page() {
  const data = await fetchData()

  return <h1>{data}</h1>
}
