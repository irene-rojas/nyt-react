import React from "react";
import "./Search.css";

const Search = (props) => (

    <div className="wrapper">

        <form className="form">

            <div id="queryDiv">
                <p>Query</p>
                <input id="queryValue"
                    defaultValue={props.query}
                    type="text"
                    name="query"
                    onChange={props.onChange}
                />
            </div>
            
            <div id="startYearDiv">
            <p> Start Year</p>
                <input
                    defaultValue={props.startYear}
                    type="number"
                    name="startYear"
                    onChange={props.onChange}
                />
            </div>

            <div id="endYearDiv">
                <p>End Year</p>
                <input
                    defaultValue={props.endYear}
                    type="number"
                    name="endYear"
                    onChange={props.onChange}
                />
            </div>

            <br />

            <button onClick={props.onSubmit}>Submit</button>

        </form>

    </div>

)

export default Search;