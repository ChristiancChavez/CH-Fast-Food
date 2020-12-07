import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
//Styles
import './OptionsHeader.scss';
const OptionsHeader = ({ name,  route }) => (
    <Link className="optionsHeader" to={route}>
        <FontAwesomeIcon  icon={name} />
    </Link>
)

OptionsHeader.prototypes = {
    icon: PropTypes.string,
    route: PropTypes.string,
}

export default OptionsHeader;
