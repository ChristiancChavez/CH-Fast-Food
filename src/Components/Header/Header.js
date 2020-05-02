import React from 'react';
import OptionsHeader from '../OptionsHeader/OptionsHeader';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faMobileAlt, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    library.add(faUsers, faMobileAlt, faStroopwafel);
    return (
        <div>
            <div>
                <OptionsHeader route={'Home'} name={faStroopwafel}/>
                <OptionsHeader route={'AboutUs'} name={faUsers}/>
                <OptionsHeader route={'Contact'} name={faMobileAlt} />
            </div>
            <h1>CH FAST FOOD</h1>
        </div>
    )
}

export default Header;
