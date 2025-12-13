import Link from "next/link";

export default function page() {
  return (
    <div>
        <h1>This is product page.</h1>
        <Link href="/">Home</Link>
        <Link href="/product/1">product 1</Link>
        <Link href="/product/2" replace>product 2</Link>
    </div>
  )
}
