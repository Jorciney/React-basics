import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
    const items = props.news.map((item => {
        return (
            <div key={item.id}>
                <NewsItem item={item}/>
            </div>
        )
    }));

    return (
        <div>
            {items}
        </div>
    );
};

export default NewsList;

