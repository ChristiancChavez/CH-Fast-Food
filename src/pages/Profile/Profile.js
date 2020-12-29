import React, { useContext } from "react";
//Components
import ProfileItem from '../../Components/ProfileItem';
import HeaderPage from '../../Components/HeaderPages';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt, faMobileAlt, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { ProfileContext } from './../../context/ProfileContext';
//Styles


const Profile = () => {

    const { email, password, name, phone } = useContext(ProfileContext);
    const nameItemsProfile = [email, password, name, phone];
    const iconsProfile = library.add(faUserAlt, faMobileAlt, faEnvelope, faLock);

    const dataProfile = iconsProfile.reduce((acc, item => {
        const indexItem = iconsProfile.indexOf(item);
        const dataItem = { icon:item, itemProfile:nameItemsProfile[indexItem] } 
        acc.push(dataItem);
        return acc;
    }), []);

    return (
        <div className="profile">
            <HeaderPage title="Your Profile" />
            <div className="profile__categories">
                {dataProfile.map(data => {
                    <ProfileItem icon={data.icon} nameItemData={data.itemProfile} />
                })}
            </div>
            <h1>jgsdkjgbsdgjsdfgsdbfgsjb</h1>
        </div>
    )
};

export default Profile;
