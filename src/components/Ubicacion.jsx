import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRegionStore from '../store/regionStore';
import './style/Ubicacion.css';

const Ubicacion = () => {
  const { t } = useTranslation();
  const { region } = useRegionStore();
  const loc = region.location;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="ubicacion-section">
      <div className="ubicacion-overlay"></div>

      <div className="ubicacion-container">
        <div className="ubicacion-mapa">
          <h2>
            <span className="highlight">{t('location.title_1')}</span> {t('location.title_2')}
          </h2>

          {loc.hasAddress && loc.mapUrl ? (
            <iframe
              title="Mapa ubicación"
              src={loc.mapUrl}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          ) : (
            <div className="ubicacion-coming-soon">
              <div className="coming-soon-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>{t('location.coming_soon')}</h3>
              <p>
                {t('location.coming_soon_text')}{' '}
                <strong>{loc.city}, {loc.country}</strong>
              </p>
              <div className="coming-soon-pin">
                <i className="fas fa-store"></i>
                <span>{loc.city}, {loc.state}</span>
              </div>
            </div>
          )}
        </div>

        <div className="ubicacion-info">
          {loc.hasAddress ? (
            <>
              <h3 className="highlight">{t('location.address')}</h3>
              <p><strong>{loc.address}</strong></p>
              <p>{loc.postalCode}</p>
              <p><strong>{loc.city}, {loc.state}</strong></p>
              <p><i className="fas fa-phone"></i> {region.phone}</p>
            </>
          ) : (
            <div className="ubicacion-notify">
              <i className="fas fa-bell notify-bell"></i>
              <h3>{t('location.notify_title')}</h3>
              <form onSubmit={handleNotify}>
                <input
                  type="email"
                  placeholder={t('location.notify_placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  {submitted ? <i className="fas fa-check"></i> : t('location.notify_btn')}
                </button>
              </form>
              <div className="ubicacion-contact-alt">
                <a
                  href={`https://wa.me/${region.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-chip"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href={`mailto:${region.email}`} className="contact-chip">
                  <i className="fas fa-envelope"></i> Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
