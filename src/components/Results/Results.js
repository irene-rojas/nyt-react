import React from "react";
import ResultsModel from "../ResultsModel/ResultsModel";
import "./Results.css";

const Results = (props) => (

        <section className="masterDiv resultsDiv">

            {props.articles.length ? (
                <div>
                  {props.articles.map(article => (
                    <ResultsModel
                      key={article._id}
                      _id={article._id}
                      title={article.headline.main}
                      url={article.web_url}
                      date={article.pub_date}
                    />
                  ))}
                </div>
              ) : (
                <h2 className="text-center">No articles</h2>
              )}
              
        </section>
)

export default Results;
