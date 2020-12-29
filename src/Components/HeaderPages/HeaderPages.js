import React from 'react';
//Dependencies
import PropTypes from 'prop-types';
//styles
import './HeaderPages.scss';

const HeaderPages = ({ title, paragraph}) => {
    return (
        <div className="headerPage">
            <h4 className="headerPage__title">{title}</h4>
            {paragraph &&
            <p className="headerPage__paragraph">{paragraph}</p>
            }
        </div>
    )
}

HeaderPages.protoTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
}
HeaderPages.defaultProps = {
    title: 'Welcome'
}

export default HeaderPages;