function Summary({id, title, description, date}){
    return(
        <ul id={id}>
            <li className="headline">{title}</li>
            <li className="description">{description}</li>
            <li className="date">{date}</li>
            <button>more info ...</button>
        </ul>
    )
}
export default Summary