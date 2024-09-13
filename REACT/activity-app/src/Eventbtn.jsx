function onClick(){
    console.log("btn was clicked")
}
function nonClick(){
    console.log("btn was hovered")
}
export default function Eventbtn(){
    return(
        <div>
        <button onClick={onClick}>"Click me"</button>
        <button onMouseOver={nonClick}>Hover me</button>
        </div>
    )
}