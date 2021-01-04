import React, { useContext } from 'react';
//Components
import OptionsHeader from '../OptionsHeader';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faBriefcase, faStroopwafel, faListAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
//Styles
import './Header.scss';
//Context
import { AuthContext } from './../../context/AuthContext';

const Header = () => {

    library.add(faUsers, faBriefcase, faStroopwafel, faListAlt);
    const { login } = useContext(AuthContext);
    //const showIconProfile = login ? false : true

    return (
        <div className="header">
            <div className="header__menu">
                <OptionsHeader route="/" name={faStroopwafel}/>
                <OptionsHeader route="/about" name={faUsers}/>
                <OptionsHeader route="/services" name={faBriefcase} />
                <OptionsHeader route="/calories" name={faListAlt} />
                {!login && <OptionsHeader route="/profile" name={faUserCircle} />}
            </div>
            <h1 className="header__title">CH FAST FOOD</h1>
        </div>
    )
}

export default Header;
