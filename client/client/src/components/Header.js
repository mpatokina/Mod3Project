import React from 'react';
import animals from './animals.png';

class Header extends React.Component {
    render() {
        return(
            <div className="header-name">
                <h1>AnimalCare</h1>
                <img src={ animals } alt="cat and dog" />
            </div>
        )
    }
}

export default Header;