import React from 'react';
import '../../src/css/styles.css'

const Header = (props) => {
    return (<header style={{background: `${props.searchTerm ? '#65D578' : '#F78A1F'}`}}>
        <div className={'center'}>
            <div className={'flex'}>
                <div> JDC</div>
                <div className={'time'}> {new Date().toLocaleString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                })}</div>
            </div>
            <h2>Welcome to JDC News</h2>
            <input onChange={props.keywords}/>
        </div>
    </header>);
};

export default Header;