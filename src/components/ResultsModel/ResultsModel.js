import React from "react";
import "./ResultsModel.css";

const ResultsModel = (props) => (

    <div className="individualResult">
        <div className="headline">{props.title}</div>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        Read story</a>
    </div>

)

export default ResultsModel;