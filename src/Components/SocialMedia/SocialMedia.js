import React from 'react';
//Data
import socialMediaAccounts from '../../utils/socialMediaAccounts';
//Styles
import './socialMedia.scss';

const SocialMedia = () => (
    <div className="social">
        {socialMediaAccounts.map(socialMediaAccount => (
                <a
                    href={`https://www.${socialMediaAccount}.com`}
                    className="social__icon"
                    target="blank"
                    key={socialMediaAccount}>
                    <img
                        className="social__icon__image"
                        src={require(`../../assets/images/${socialMediaAccount}.png`)}
                        alt={socialMediaAccount}
                    />
                </a>
            )
        )}
    </div>
);


export default SocialMedia;