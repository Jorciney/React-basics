import React, {Component} from 'react';
import '../../src/css/styles.css'

class Header extends Component {
    render() {
        return (<header>
            <div>JDC</div>
            <div className={'time'}> {new Date().toLocaleString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
            })}</div>
        </header>);
    }
}

export default Header;