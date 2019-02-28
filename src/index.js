import React, {Component} from 'react';
import ReactDOM from "react-dom";

import JSON from './db.json';
// Components
import Header from './components/header';
import NewsList from './components/news_list';


class App extends Component {
    state = {
        news: JSON,
        searchTerm: undefined
    };

    getKeyWord = (event) => {
        this.setState({ searchTerm: event.target.value });
        return this.searchTerm;
    };

    render() {
        return (
            <div className="lowText">
                <Header searchTerm={this.state.searchTerm} keywords={this.getKeyWord}/>
                <NewsList news={this.state.news}/>
                <div>{this.state.searchTerm}</div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));