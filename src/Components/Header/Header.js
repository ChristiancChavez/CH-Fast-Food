import React from 'react';
//Components
import OptionsHeader from '../OptionsHeader/OptionsHeader';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faMobileAlt, faStroopwafel } from '@fortawesome/free-solid-svg-icons';

//Styles
import  './Header.scss';
const Header = () => {
    library.add(faUsers, faMobileAlt, faStroopwafel);
    return (
        <div className="header">
            <div className="header__menu">
                <OptionsHeader route={'Home'} name={faStroopwafel}/>
                <OptionsHeader route={'AboutUs'} name={faUsers}/>
                <OptionsHeader route={'Contact'} name={faMobileAlt} />
            </div>
            <h1 className="header__title">CH FAST FOOD</h1>
        </div>
    )
}

export default Header;