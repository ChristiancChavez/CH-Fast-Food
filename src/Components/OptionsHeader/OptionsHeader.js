import React from 'react';
import PropTypes from 'prop-types';
const OptionsHeader = ({ icon,  route }) => (
    <div>
        <Link to={`/${route}/`}>
            <i class={`fas ${icon}`}></i>
        </Link>
    </div>
)

OptionsHeader.prototypes = {
    icon: PropTypes.string,
    route: PropTypes.string,
}

export default OptionsHeader;
