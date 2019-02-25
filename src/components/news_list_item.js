import React from 'react';
import '../css/styles.css'

const NewsItem = ({item}) => {
    return (
        <div className={'center border-bottom'}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>


    );
};
export default NewsItem;