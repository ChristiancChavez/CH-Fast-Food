import React from 'react';
//Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ProfileItem = ({ icon, nameItemData }) => {
  return (
    <div>
        <FontAwesomeIcon icon={icon} />
        <span>{nameItemData}</span>
    </div>
  )
};

export default ProfileItem;
