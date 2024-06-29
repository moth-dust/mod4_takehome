function Details({title, image, content, date, sourceName, sourceURL, changePointer}){
    return(
        <ul className="details">
            <li className="headline">{title}</li>
            <li className="date">{date}</li>
            <li className="source-name">{sourceName}</li>
            <li className="content">"{content.split('[')[0]}"</li>
            <li className="source-url">Full Article:   <a href={sourceURL}>{sourceName}</a> </li>
          
            <button onClick={(e)=>{changePointer(0)}}>collapse details ...</button>

        </ul>
    )

}
export default Details