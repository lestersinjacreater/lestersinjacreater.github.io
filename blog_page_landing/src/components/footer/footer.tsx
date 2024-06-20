import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"]
    },
    {
      title: "Company",
      links: ["About", "Team", "Blog", "Careers"]
    },
    {
      title: "Connect",
      links: ["Contact", "Newsletter", "LinkedIn"]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">Blogr</div>
        {footerLinks.map((section, index) => (
          <div key={index} className="footer__links">
            <div>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
