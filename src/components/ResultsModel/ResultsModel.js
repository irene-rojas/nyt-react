import React from "react";

const ResultsModel = (props) => (

    <div className="individualResult">
        <div className="headline">{props.title}</div>
        <div className="date">{props.date}</div>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        Read story</a>
    </div>

)

export default ResultsModel;