function Details({title, image, content, date, sourceName, sourceURL, changePointer}){
    return(
        <ul className="details">
            <img src={image}></img>
            <li className="headline">{title}</li>
            <li className="date">Published: {date}</li>
            <li className="source">{sourceName}</li>
            <li className="description">"{content.split('[')[0]}"</li>
            <li className="source-url">Full Article:   <a href={sourceURL}>{sourceName}</a> </li>
            <button onClick={(e)=>{changePointer(0)}}>collapse details ...</button>

        </ul>
    )

}
export default Details