import React from 'react'

export default async function page() {
  await new Promise((resolve)=>{
    setTimeout(() => {
        resolve("internal delay");
    }, 2000);
  })
         return (
    <div>
        <h1>This is users page.</h1>
    </div>
  )
}
