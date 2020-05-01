import React from 'react';
import OptionsHeader from '../OptionsHeader/OptionsHeader';
const Header = () => (
    <div>
        <div>
            <OptionsHeader route={'Home'} icon={'fa-stroopwafel'}/>
            <OptionsHeader route={'AboutUs'} icon={'fa-users'}/>
            <OptionsHeader route={'Contact'} icon={'fa-mobile-alt'} />
        </div>
        <h1>CH FAST FOOD</h1>
    </div>
)

export default Header;
