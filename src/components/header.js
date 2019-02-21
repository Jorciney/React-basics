import React,{Component} from 'react';


class Header extends Component {
    render() {
        return (<header>
            <div>JDC</div>
            <div> {new Date().toLocaleString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
            })}</div>
        </header>);
    }
}

export default Header;