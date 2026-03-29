import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './callbutton.css';

const CallButton = () => {
  const phoneNumber = '+971 56 911 9955'; 
  const telUrl = `tel:${phoneNumber}`;

  return (
    <a
      href={telUrl}
      className="call-button"
      aria-label="Call us"
    >
      <FaPhoneAlt className="call-icon" />
    </a>
  );
};

export default CallButton;