import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OptionsHeader.scss';
const OptionsHeader = ({ name,  route }) => (
    <div className="optionsHeader">
        {/* <Link to={`/${route}/`}> */}
            <FontAwesomeIcon  icon={name} />
        {/* </Link> */}
    </div>
)

OptionsHeader.prototypes = {
    icon: PropTypes.string,
    route: PropTypes.string,
}

export default OptionsHeader;
