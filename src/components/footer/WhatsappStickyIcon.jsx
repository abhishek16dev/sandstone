import React from 'react';

const WhatsAppIcon = ({ phoneNumber = '9696964606', logoSrc, size = '50px', fixed = false }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const containerStyle = fixed
    ? {
        position: 'fixed',
        bottom: '30px',
        right: '20px',
        zIndex: 1000,
      }
    : {};

  const buttonStyles = {
    ...containerStyle,
    width: size,
    height: size,
    cursor: 'pointer',
    borderRadius: '50%',
    boxShadow: fixed ? '0 2px 10px rgba(0,0,0,0.2)' : 'none',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backgroundStyles = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  };

  const iconStyles = {
    zIndex: 1,
    position: 'relative',
    width: '80%',
    height: '80%',
    transition: 'transform 0.3s ease',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {logoSrc ? (
        <img src={logoSrc} alt="WhatsApp Background" style={backgroundStyles} />
      ) : (
        <div style={{ ...backgroundStyles, backgroundColor: '' }} />
      )}

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        style={{
          ...iconStyles,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      />
    </a>
  );
};

export default WhatsAppIcon;
