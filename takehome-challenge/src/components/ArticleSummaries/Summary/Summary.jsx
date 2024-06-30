function Summary({id,image, title, description, date,changePointer }){
    return(
        <ul >
            <img src={image}></img>
            <li className="headline">{title}</li>
            <li className="description">{description}</li>
            <li className="date">Published: {date}</li>
            <button value={id} onClick={(e)=>{changePointer(e.target.value)}}>more info ...</button>
        </ul>
    )
}
export default Summary