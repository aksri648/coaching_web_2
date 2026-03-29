import React from "react";

const MapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8080901514577!2d55.277034!3d25.243388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f436c026f062b%3A0x213fb863a122fd15!2sAustria%20Business%20Center%20-%20Serviced%20Offices%2C%20Virtual%20Offices%2C%20Workspace%2C%20Coworking%20Offices!5e0!3m2!1sen!2sin!4v1774013514420!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Business Location"
    ></iframe>
  );
};

export default MapEmbed;