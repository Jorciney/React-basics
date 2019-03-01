import React, {Component} from 'react';
import ReactDOM from "react-dom";

import JSON from './db.json';
// Components
import Header from './components/header';
import NewsList from './components/news_list';


class App extends Component {
    state = {
        news: JSON,
        filteredNews: [],
        searchTerm: undefined
    };

    getKeyWord = (event) => {
        const searchTerm = event.target.value;
        let filteredNews = this.state.news.filter(item => {
            return item.title.indexOf(searchTerm) > -1;
        });
        this.setState({filteredNews: filteredNews});
        return searchTerm;
    };

    render() {
        let newsList = this.state.filteredNews.length <= 0 ? this.state.news : this.state.filteredNews;
        return (
            <div className="lowText">
                <Header searchTerm={this.state.searchTerm} keywords={this.getKeyWord}/>
                <NewsList news={newsList}/>
                <div>{this.state.searchTerm}</div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));