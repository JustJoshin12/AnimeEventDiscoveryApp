import React, { useState } from 'react';
import avatar1 from "../../images/avatarIcons/megumi.jpg";
import avatar2 from "../../images/avatarIcons/muzan.gif";
import avatar3 from "../../images/avatarIcons/tanjiro.png";

const avatars = [
  { id: 1, name: 'megumi', imageUrl: `${avatar1}` },
  { id: 2, name: 'muzan', imageUrl: `${avatar2}` },
  { id: 3, name: 'tanjiro', imageUrl: `${avatar3}` },
  // Add more avatars as needed
];

const AvatarDropdown = (setSelectedAvatar,isOpen,setIsOpen,selectedAvatar ) => {
  // const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  // const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center bg-white border border-gray-300 rounded-full py-2 px-4 w-full text-left">
        <img src={selectedAvatar.imageUrl || ""} alt="Selected Avatar" className="w-8 h-8 rounded-full mr-2" />
        <span>{selectedAvatar.name}</span>
        <svg className="ml-auto h-5 w-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="max-h-60 overflow-auto">
            {avatars.map(avatar => (
              <li key={avatar.id} className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectAvatar(avatar)}>
                <img src={avatar.imageUrl} alt={avatar.name} className="w-8 h-8 rounded-full mr-2" />
                <span>{avatar.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
