import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1>F1 page.</h1>
        <Link href="/f1/f2">F2</Link>
        <Link href="/f3">F3</Link>
    </div>
  )
}
/*
The Link tag is important for intercepting navigation this is like a file system
./=(.)
../ = (..)
../../ = (..)(..)
cd(root) = (...) search in the root 
*/