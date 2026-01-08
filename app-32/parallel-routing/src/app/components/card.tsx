
export default function Card({children}:{children:React.ReactNode}) {
  const innerStyle = {
    padding:"100px",
    margin:"10px",
    border:"1px solid black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }

  return <div style={innerStyle}>{children}</div>
}
