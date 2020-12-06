import React from 'react';
//Components
import OptionsHeader from '../OptionsHeader/OptionsHeader';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faBriefcase, faStroopwafel } from '@fortawesome/free-solid-svg-icons';

//Styles
import  './Header.scss';
const Header = () => {
    library.add(faUsers, faBriefcase, faStroopwafel);
    return (
        <div className="header">
            <div className="header__menu">
                <OptionsHeader route={''} name={faStroopwafel}/>
                <OptionsHeader route={'about'} name={faUsers}/>
                <OptionsHeader route={'services'} name={faBriefcase} />
            </div>
            <h1 className="header__title">CH FAST FOOD</h1>
        </div>
    )
}

export default Header;
