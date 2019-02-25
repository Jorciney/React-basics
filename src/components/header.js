import React, {Component} from 'react';
import '../../src/css/styles.css'

class Header extends Component {

    state = {
        active: false,
        keywords: ''
    };

    onInputChangeHandler = (event) => {
        this.setState({
            active: !!event.target.value,
            keywords: event.target.value
        });
    };


    render() {
        console.log(this.state.keywords);


        return (<header style={{background: `${this.state.active ? '#65D578' : '#F78A1F'}`}}>
            <div className={'center'}>
                <div className={'flex'}>
                    <div> JDC</div>
                    <div className={'time'}> {new Date().toLocaleString(undefined, {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}</div>
                </div>
                <h2>Welcome to JDC News</h2>
                <input onChange={(e) => this.onInputChangeHandler(e)}/>
            </div>
            <p>{this.state.keywords}</p>
        </header>);
    }
}

export default Header;