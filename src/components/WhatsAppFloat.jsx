import React from 'react';
import useRegionStore from '../store/regionStore';
import './style/WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const getWhatsAppUrl = useRegionStore((s) => s.getWhatsAppUrl);

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;
