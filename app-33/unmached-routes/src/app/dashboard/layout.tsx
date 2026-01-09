import React from "react"

export default function layout({
    children,
    users,
    revenue,
    notifications
}:{
    children:React.ReactNode,
    users:React.ReactNode,
    revenue:React.ReactNode,
    notifications:React.ReactNode,
}) {
  return (
    <div>
        <div style={{color:"darkblue"}}>{children}</div>
        <div style={{display:"flex"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div>{notifications}</div>
        </div>
    </div>
  )
}
