import React from "react"

export default function layout({
    children,
    users,
    revenue,
    notifications,
    login
}:{
    children:React.ReactNode,
    users:React.ReactNode,
    revenue:React.ReactNode,
    notifications:React.ReactNode,
    login:React.ReactNode,
}) {
    const isLogedIn = false;
  return isLogedIn ? (
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
  ) : (login)
}
