import React, { useState, useEffect } from 'react';
import './style/TikTokEmbed.css';

/**
 * Componente para embeber videos de TikTok con thumbnail automático.
 * 
 * Usa el player embed oficial de TikTok y obtiene el thumbnail
 * automáticamente del video usando la API de oEmbed.
 * Un solo clic en el thumbnail carga y reproduce el video.
 * 
 * Props:
 *  - videoId: ID del video de TikTok (número)
 *  - title: título/descripción del video
 */
const TikTokEmbed = ({ videoId, title = 'Video de TikTok' }) => {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  // URL con autoplay=1 para que al cargar el iframe ya reproduzca
  const embedUrl = `https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1&autoplay=1`;

  // Obtener el thumbnail del video desde TikTok oEmbed API
  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const videoUrl = `https://www.tiktok.com/@user/video/${videoId}`;
        const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;
        
        const response = await fetch(oembedUrl);
        const data = await response.json();
        
        if (data.thumbnail_url) {
          setThumbnail(data.thumbnail_url);
        }
      } catch (error) {
        console.warn('No se pudo obtener el thumbnail del video:', error);
      }
    };

    fetchThumbnail();
  }, [videoId]);

  const handlePlay = () => {
    setPlaying(true);
  };

  // Si no está reproduciendo y tenemos thumbnail, mostramos placeholder
  // Un solo clic inicia la reproducción directamente
  if (!playing && thumbnail) {
    return (
      <div className="tiktok-embed-wrapper" onClick={handlePlay}>
        <img src={thumbnail} alt={title} className="tiktok-thumbnail" />
        <div className="tiktok-play-overlay">
          <div className="tiktok-play-btn">
            <svg className="tiktok-play-icon" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
        <span className="tiktok-label">
          <i className="fab fa-tiktok"></i> {title}
        </span>
      </div>
    );
  }

  // Si no tenemos thumbnail, mostramos placeholder genérico con ícono
  if (!playing && !thumbnail) {
    return (
      <div className="tiktok-embed-wrapper tiktok-placeholder" onClick={handlePlay}>
        <div className="tiktok-placeholder-content">
          <i className="fab fa-tiktok tiktok-placeholder-icon"></i>
          <span className="tiktok-placeholder-title">{title}</span>
          <span className="tiktok-placeholder-cta">▶ Reproducir</span>
        </div>
      </div>
    );
  }

  // Video reproduciéndose: iframe con autoplay
  return (
    <div className="tiktok-embed-wrapper tiktok-active">
      {!loaded && (
        <div className="tiktok-loading">
          <div className="tiktok-spinner"></div>
          <span>Cargando video...</span>
        </div>
      )}
      <iframe
        src={embedUrl}
        title={title}
        className={`tiktok-iframe ${loaded ? 'visible' : ''}`}
        allowFullScreen
        allow="encrypted-media; autoplay"
        onLoad={() => setLoaded(true)}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default TikTokEmbed;
