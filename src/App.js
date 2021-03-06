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
        // empty array for results
    };

    // multiple text fields
    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.query}&api-key=${process.env.REACT_APP_NYT_API_KEY}&facet_fields=source&facet=true&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}1231`)
        .then(res => {
            this.setState({
                articles: res.data.response.docs
            })
            // console.log(this.state.articles);
        });
    }

  render() {
    return (
    
        <div className="parallax">
            
        <div className="App">

            <header className="header">
                <h1>'The New York Times' Article Search</h1>
                <p>Search for articles from "The New York Times"</p>
            </header>

            <section className="searchDiv">
                <h2 id="searchWord">Search</h2>
                <div className="inputFields">
                    <Search 
                        query={this.state.query} 
                        onChange={this.onChange} 
                        onSubmit={this.onSubmit} 
                        startYear={this.state.startYear} 
                        endYear={this.state.endYear}
                    />
                </div>
            </section>

            {this.state.articles.length > 0 && 
                <div className="resultsDiv">
                <h2 id="resultWord">Results</h2>
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
