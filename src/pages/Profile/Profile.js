import React, { useContext } from "react";
//Components
import ProfileItem from '../../Components/ProfileItem';
import HeaderPage from '../../Components/HeaderPages';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt, faEnvelope, faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { ProfileContext } from './../../context/ProfileContext';
//Styles
import './profile.scss';

const Profile = () => {

    const { profile } = useContext(ProfileContext);
    const iconsProfile = [faUserAlt, faEnvelope, faMobileAlt, faLock];
    const dataProperties = ['user', 'email', 'phone', 'password'];
    library.add(faUserAlt, faEnvelope, faMobileAlt, faLock);

    const dataProfile = dataProperties.reduce((acc, item) => {
        const indexItem = dataProperties.indexOf(item);
        const dataItem = { icon:iconsProfile[indexItem], itemProfile:profile[item] } 
        acc.push(dataItem);
        return acc;
    }, []);

    return (
        <div className="profile">
            <HeaderPage title="Your Profile" />
            <div className="profile__categories">
                {dataProfile.map((data, index) => (
                    <ProfileItem icon={data.icon} nameItemData={data.itemProfile} key={index} />
            ))}
            </div>
        </div>
    )
};

export default Profile;
