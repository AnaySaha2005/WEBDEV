export default function Activity({user,color}){
    let style={backgroundColor:color,border:"2px solid white",borderRadius:"40px"}
    let pstyle={padding:"1px 5px"}
return(
    <>
    <div style={style}> 
        <p style={pstyle}>Username:&nbsp;{user}</p>
    </div>
    </>
)
}