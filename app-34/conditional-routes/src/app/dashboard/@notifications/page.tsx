import Card from "@/app/components/card"
import Link from "next/link"
export default function page() {
  return (
    <Card>
      <Link href="/dashboard/archive">Archive</Link>
    </Card>
  )
}
