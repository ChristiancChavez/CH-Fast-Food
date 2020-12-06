import React from 'react';
//Data
import socialMediaAccounts from '../../Assets/Data/SocialMediaAccounts';
//Styles
import './SocialMedia.scss';

const SocialMedia = () => {
    const showSocialmedia = socialMediaAccounts.map(socialMediaAccount => {
        return (
            <a href={`https://www.${socialMediaAccount}.com`} className="social__icon" target="blank"><img className="social__icon__image" src={require(`../../Assets/Images/${socialMediaAccount}.png`)} alt={socialMediaAccount} key={socialMediaAccount}/></a>
        )
    })
    return (
        <div className="social">
            {showSocialmedia}
        </div>
    )
} 

export default SocialMedia;