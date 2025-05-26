import React from 'react';

const WhatsAppStickyIcon = ({ phoneNumber, logoSrc, size = '50px' }) => {
  const whatsappLink = `https://wa.me/${phoneNumber || '9007154238'}`;

  const buttonStyles = {
    position: 'fixed',
    bottom: '30px',
    right: '20px',
    zIndex: 1000,
    width: size,
    height: size,
    cursor: 'pointer',
    borderRadius: '50%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
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
    width: '60%',
    height: '60%',
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
        <div style={{ ...backgroundStyles, backgroundColor: '#25D366' }} />
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

export default WhatsAppStickyIcon;