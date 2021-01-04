import React from 'react';
//Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Style
import './profileItem.scss'; 
const ProfileItem = ({ icon, nameItemData }) => {
  return (
    <div className="profile-item">
        <FontAwesomeIcon icon={icon} className="profile-item__icon" />
        <span className="profile-item__name">{nameItemData}</span>
    </div>
  )
};

export default ProfileItem;
