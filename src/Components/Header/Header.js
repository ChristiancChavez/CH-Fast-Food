import React from 'react';
//Components
import OptionsHeader from '../OptionsHeader';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faBriefcase, faStroopwafel, faListAlt } from '@fortawesome/free-solid-svg-icons';
//Styles
import  './header.scss';

const Header = () => {
    library.add(faUsers, faBriefcase, faStroopwafel, faListAlt);
    return (
        <div className="header">
            <div className="header__menu">
                <OptionsHeader route="/" name={faStroopwafel}/>
                <OptionsHeader route="/about" name={faUsers}/>
                <OptionsHeader route="/services" name={faBriefcase} />
                <OptionsHeader route="/calories" name={faListAlt} />
            </div>
            <h1 className="header__title">CH FAST FOOD</h1>
        </div>
    )
}

export default Header;
