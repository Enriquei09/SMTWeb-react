import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useRegionStore from '../store/regionStore';
import './style/Stats.css';

const AnimatedNumber = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {suffix === '%' ? `${count}%` : `+${count}`}
    </span>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  const { region } = useRegionStore();
  const stats = region.stats;

  return (
    <section className="stats-section">
      <div className="overlay"></div>
      <div className="stats-container">
        <div className="stat-box">
          <i className="fas fa-utensils"></i>
          <p className="stat-value">
            <AnimatedNumber target={stats.dishes} />
          </p>
          <p className="stat-text">{t('stats.dishes_label')}</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-users"></i>
          <p className="stat-value">
            <AnimatedNumber target={stats.customers} />
          </p>
          <p className="stat-text">{t('stats.customers_label')}</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-fire"></i>
          <p className="stat-value">
            <AnimatedNumber target={stats.flavor} suffix="%" />
          </p>
          <p className="stat-text">{t('stats.flavor_label')}</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-leaf"></i>
          <p className="stat-value">
            <AnimatedNumber target={stats.freshIngredients} suffix="%" />
          </p>
          <p className="stat-text">{t('stats.fresh_label')}</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
