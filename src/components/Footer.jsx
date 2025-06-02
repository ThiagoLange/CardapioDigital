// src/components/Footer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const SocialIcon = ({ label, href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
    {children || label.substring(0, 1).toUpperCase()}
  </a>
);

SocialIcon.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

function Footer() {
  const fictitiousAddress = "Rua das Palmeiras Saboreantes, 123 - Bairro Bela Mesa, Joinville - SC";
  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", iconChar: "Face" },
    { label: "Instagram", href: "https://instagram.com", iconChar: "Insta" },
    { label: "Whatsapp", href: "https://whatsapp.com", iconChar: "Whats" },
    { label: "Twitter", href: "https://twitter.com", iconChar: "X" }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">
        <div className="footer-address">
          <h4>Visite-nos</h4>
          <p><strong>Mamamia Massas</strong></p>
          <p>{fictitiousAddress}</p>
          <p>Telefone: (47) 3333-7777</p>
          <p>Email: contato@mamamiamassas.com.br</p>
        </div>
        <div className="footer-social-media">
          <h4>Siga-nos</h4>
          <div className="social-icons-container">
            {socialLinks.map(link => (
              <SocialIcon key={link.label} label={link.label} href={link.href}>
                {/* Aqui você poderia usar um componente de ícone real */}
                {link.iconChar || link.label.substring(0, 1).toUpperCase()}
              </SocialIcon>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Mamamia Massas. Deliciosamente seu, desde sempre.</p>
      </div>
    </footer>
  );
}

export default Footer;