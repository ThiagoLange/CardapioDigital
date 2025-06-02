// src/components/Footer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

// --- Placeholder para o SVG components ---
const FacebookIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"> {/* Placeholder Facebook SVG */} <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" /></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"> {/* Placeholder Instagram SVG */} <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.803.248 2.228.42.447.183.799.430.981.909.3.637.468 1.345.527 2.298.058 1.262.07 1.646.07 4.85s-.012 3.588-.07 4.85c-.052 1.172-.248 1.803-.42 2.228-.183.447-.430.799-.909.981-.637.3-.1345.468-2.298.527-1.262.058-1.646.07-4.85.07s-3.588-.012-4.85-.07c-1.172-.052-1.803-.248-2.228-.42a2.991 2.991 0 0 1-.981-.909c-.3-.637-.468-1.345-.527-2.298C2.23 15.588 2.163 15.204 2.163 12s.012-3.588.07-4.85c.052-1.172.248-1.803.42-2.228.183-.447.430-.799.909-.981.637-.3 1.345-.468 2.298-.527C8.412 2.175 8.796 2.163 12 2.163m0-1.631c-3.255 0-3.678.014-4.954.072C5.542.643 4.653.858 3.893 1.19c-.771.338-1.367.812-1.943 1.388C1.373 3.154.898 3.75.561 4.522c-.332.76-.547 1.648-.603 2.893C-.108 8.72-.12 9.142-.12 12s.012 3.28.072 4.554c.055 1.245.27 2.133.603 2.893.338.771.812 1.367 1.388 1.943.576.576 1.173 1.05 1.943 1.388.76.332 1.648.547 2.893.603 1.276.058 1.699.072 4.954.072s3.678-.014 4.954-.072c1.245-.055 2.133-.27 2.893-.603.771-.338 1.367-.812 1.943-1.388.576-.576 1.05-1.173 1.388-1.943.332-.76.547-1.648.603-2.893.058-1.276.072-1.699.072-4.954s-.014-3.678-.072-4.954c-.055-1.245-.27-2.133-.603-2.893a6.564 6.564 0 0 0-1.388-1.943c-.576-.576-1.173-1.05-1.943-1.388-.76-.332-1.648-.547-2.893-.603C15.678.545 15.255.531 12 .531z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><circle cx="16.965" cy="7.032" r="1.437"/></svg>;
const WhatsappIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"> {/* Placeholder WhatsApp SVG */} <path d="M16.75 13.96c.27.42.24.96-.07 1.35l-1.3 1.62c-.2.24-.48.38-.78.42-.42.06-.8-.13-1.16-.52C12.63 16.04 11.1 15.1 9.57 13.57c-1.53-1.53-2.47-3.07-3.26-3.88-.39-.37-.58-.74-.52-1.16.04-.3.18-.58.42-.78l1.62-1.3c.39-.31.93-.34 1.35-.07.36.24.72.57 1.01.92.28.34.36.79.24 1.2l-.53 1.81c-.07.26 0 .54.2.74l.05.05c1.3 1.3 2.82 1.92 4.23 1.27l.1-.04c.28-.12.61-.06.82.12l1.4.98zM12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.39 1.26 4.84l-1.34 4.91 5.04-1.32c1.4.74 2.97 1.18 4.61 1.18h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.01 1.65c4.53 0 8.22 3.69 8.22 8.22s-3.69 8.22-8.22 8.22c-1.48 0-2.89-.4-4.13-1.09l-.3-.17-3.03.8  .82-2.98-.19-.32c-.76-1.27-1.21-2.74-1.21-4.31 0-4.53 3.69-8.22 8.22-8.22z"/></svg>;
const XTwitterIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"> {/* Placeholder X/Twitter SVG */} <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;


const SocialIcon = ({ label, href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={label}>
    {children}
  </a>
);

SocialIcon.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Footer() {
  const fictitiousAddress = "Rua das Palmeiras Saboreantes, 123 - Bairro Bela Mesa, Joinville - SC";
  
  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", iconComponent: <FacebookIcon /> },
    { label: "Instagram", href: "https://instagram.com", iconComponent: <InstagramIcon /> },
    { label: "Whatsapp", href: "https://whatsapp.com", iconComponent: <WhatsappIcon /> },
    { label: "Twitter", href: "https://twitter.com", iconComponent: <XTwitterIcon /> } // Or X
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
                {link.iconComponent}
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