import React, { Component } from 'react';
import './App.css';


class App extends Component {

    state = {
        query: "",
        startYear: "",
        endYear: "",
        articles: []
        // empty array waiting for results
    };

    // text fields
    onChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

  render() {
    return (
    
        <div className="parallax">
            
        <div className="App">

            <div className="header">
                <h1>'The New York Times' Article Search</h1>
                <p>Search for articles from "The New York Times"</p>
            </div>

            {/* <div className="searchDiv">
                <h2 id="searchWord">Search</h2>
                <Search 
                query={this.state.query} 
                handleInputChange={this.handleInputChange} 
                handleFormSubmit={this.handleFormSubmit} 
                startYear={this.state.startYear} 
                endYear={this.state.endYear}/>
            </div> */}

            {/* {this.state.articles.length > 0 && 
                <div className="resultsDiv">
                <h2 
                    id="resultWord">Results</h2>
                <Results 
                    articles={this.state.articles} 
                    handleArticleSave={this.handleArticleSave}/>
            </div>} */}


        </div>

        </div>
    );
  }
}

export default App;
