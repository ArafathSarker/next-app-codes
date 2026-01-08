export default function layout({
  children,
  users,
  revenue,
  notification
}:{children:React.ReactNode,
  users:React.ReactNode,
  revenue:React.ReactNode,
  notification:React.ReactNode
}) {
  return (
   <div>
    <h1>Dashboard</h1>
   <div>{children}</div>
   <div style={{display:"flex"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
    <div>{users}</div>
   <div>{revenue}</div>
   </div>
   <div>{notification}</div>
   </div>
   
   </div>
  )
}
