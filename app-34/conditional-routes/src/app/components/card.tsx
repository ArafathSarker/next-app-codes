export default function Card({children}:{children:React.ReactNode}) {
  return (
    <div style={{
        fontWeight:"bold",
        padding:"100px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        border:"2px solid black",
    }}>{children}</div>
  )
}
