function Summary({id, title, description, date,changePointer }){
    return(
        <ul >
            <li className="headline">{title}</li>
            <li className="description">{description}</li>
            <li className="date">{date}</li>
            <button value={id} onClick={(e)=>{changePointer(e.target.value)}}>more info ...</button>
        </ul>
    )
}
export default Summary