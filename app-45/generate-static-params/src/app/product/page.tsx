import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
   <>
   <h1>Featured Products</h1>
   <Link href="/product/1">Product 1</Link>
   <Link href="/product/2">Product 2</Link>
   <Link href="/product/3">Product 3</Link>
   </>
  )
}
