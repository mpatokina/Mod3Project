import React from 'react';
import catanddog from './catanddog.png';

class Header extends React.Component {
    render() {
        return(
            <div className="header-name">
                <h1>AnimalCare</h1>
                <img src={ catanddog } alt="cat and dog" />
            </div>
        )
    }
}

export default Header;