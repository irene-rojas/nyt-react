import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";

class App extends Component {

    state = {
        query: "",
        startYear: "",
        endYear: "",
        articles: []
        // empty array waiting for results
    };

    // text fields
    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        console.log(value);
    };

    onSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.query}&api-key=yR0pJI0b6TCoKd5S1YkdbUztUxdzsSfh&facet_fields=source&facet=true&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}1231`)
        .then(res => {
            this.setState({
                articles: res.data
            })
        });
        console.log(this.state.articles);
    }

  render() {
    return (
    
        <div className="parallax">
            
        <div className="App">

            <div className="header">
                <h1>'The New York Times' Article Search</h1>
                <p>Search for articles from "The New York Times"</p>
            </div>

            <div className="searchDiv">
                <h2 id="searchWord">Search</h2>
                <Search 
                    query={this.state.query} 
                    onChange={this.onChange} 
                    onSubmit={this.onSubmit} 
                    startYear={this.state.startYear} 
                    endYear={this.state.endYear}/>
            </div>

            {this.state.articles.length > 0 && 
                <div className="resultsDiv">
                <h2 
                    id="resultWord">Results</h2>
                <Results 
                    articles={this.state.articles} 
                    />
            </div>}

        </div>

        </div>
    );
  }
}

export default App;
