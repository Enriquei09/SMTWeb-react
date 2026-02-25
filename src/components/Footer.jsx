import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRegionStore from '../store/regionStore';
import TikTokEmbed from './TikTokEmbed';
import './style/Footer.css';
import img1 from '../assets/barbacoa1.png';
import img2 from '../assets/barbacoa2.png';
import img3 from '../assets/barbacoa3.png';

const Footer = () => {
  const { t } = useTranslation();
  const { region } = useRegionStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>
          <span className="highlight">{t('footer.gallery_title_1')}</span> {t('footer.gallery_title_2')}
        </h2>

        <div className="footer-gallery">
          {region.tiktokVideos && region.tiktokVideos.length > 0 ? (
            region.tiktokVideos.map((video, index) => (
              <TikTokEmbed
                key={video.id + index}
                videoId={video.id}
                title={video.title}
              />
            ))
          ) : (
            /* Fallback: imágenes estáticas si no hay videos configurados */
            <>
              <div className="gallery-item">
                <img src={img1} alt="Barbacoa 1" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src={img2} alt="Barbacoa 2" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src={img3} alt="Barbacoa 3" loading="lazy" />
              </div>
            </>
          )}
        </div>

        <div className="newsletter">
          <p>
            <span className="highlight">{t('footer.newsletter_title_1')} </span>
            {t('footer.newsletter_title_2')}
          </p>
          <small>{t('footer.newsletter_subtitle')}</small>
          {subscribed ? (
            <div className="newsletter-success">
              <i className="fas fa-check-circle"></i>
              {region.language === 'es' ? '¡Gracias por suscribirte!' : 'Thanks for subscribing!'}
            </div>
          ) : (
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder={t('footer.newsletter_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">{t('footer.newsletter_btn')}</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-links">
        <div className="col">
          <h4>{t('footer.about_title')}</h4>
          <p>{t('footer.about_description')}</p>
          <div className="horario">
            <i className="fas fa-clock"></i>
            <span>
              {t('footer.hours_label')}<br />
              {region.hours.display}
            </span>
          </div>
        </div>
        <div className="col">
          <h4>{t('footer.links_title')}</h4>
          <ul>
            <li>{t('footer.link_about')}</li>
            <li>{t('footer.link_news')}</li>
            <li>{t('footer.link_partners')}</li>
            <li>{t('footer.link_team')}</li>
            <li>{t('footer.link_menu')}</li>
            <li>{t('footer.link_contact')}</li>
          </ul>
        </div>
        <div className="col">
          <h4>{t('footer.help_title')}</h4>
          <ul>
            <li>{t('footer.help_faq')}</li>
            <li>{t('footer.help_terms')}</li>
            <li>{t('footer.help_reporting')}</li>
            <li>{t('footer.help_docs')}</li>
            <li>{t('footer.help_support')}</li>
            <li>{t('footer.help_privacy')}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t('footer.copyright')}</span>
        <div className="socials">
          <a href={region.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={region.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={region.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={region.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href={region.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
