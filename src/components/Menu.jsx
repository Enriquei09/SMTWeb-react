import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useRegionStore from '../store/regionStore';
import menuData from '../config/menuData';
import { formatPrice } from '../utils/formatters';
import './style/Menu.css';

const Menu = () => {
  const { t } = useTranslation();
  const { regionId, region } = useRegionStore();
  const data = menuData[regionId];
  const [activeTab, setActiveTab] = useState('empezar');

  if (!data) return null;

  const tabs = [
    { id: 'empezar', label: t('menu.cat_empezar'), icon: 'fa-pepper-hot' },
    { id: 'tacos', label: t('menu.cat_tacos'), icon: 'fa-utensils' },
    { id: 'kilo', label: t('menu.cat_kilo'), icon: 'fa-weight-hanging' },
    { id: 'bebidas', label: t('menu.cat_bebidas'), icon: 'fa-glass-water' },
  ];

  const activeCategory = data.categories.find((c) => c.id === activeTab);

  const renderItemCard = (item) => (
    <div className="menu-item-card" key={item.id}>
      <div className="menu-item-header">
        <h4>{t(`menu.item_${item.id}`)}</h4>
        <div className="menu-item-prices">
          {item.prices.map((p, i) => (
            <span key={i} className="price-tag">
              {p.label ? `${p.label}: ` : ''}
              {formatPrice(p.price, data.currency)}
            </span>
          ))}
        </div>
      </div>
      <p className="menu-item-desc">{t(`menu.item_${item.id}_desc`)}</p>
    </div>
  );

  const renderSubcategory = (sub) => {
    const isKilo = activeTab === 'kilo';
    const price = isKilo ? sub.pricePerKilo : sub.pricePerUnit;
    const unit = isKilo ? t('menu.per_kilo') : t(`menu.sub_${sub.id}_unit`);

    return (
      <div className="menu-subcategory" key={sub.id}>
        <div className="sub-header">
          <div className="sub-header-left">
            <h3>{t(`menu.sub_${sub.id}`)}</h3>
            <p className="sub-header-desc">{t(`menu.sub_${sub.id}_desc`, '')}</p>
            <p className="sub-includes">{t(`menu.sub_${sub.id}_includes`)}</p>
          </div>
          <span className="sub-price">
            {formatPrice(price, data.currency)}{unit}
          </span>
        </div>

        <div className="sub-items-grid">
          {sub.items.map((item) => (
            <div className="sub-item-card" key={item.id}>
              <div className="sub-item-top">
                <span className="sub-item-icon">{item.icon}</span>
                <h4 className="sub-item-name">{t(`menu.item_${item.id}`)}</h4>
              </div>
              <p className="sub-item-desc">{t(`menu.item_${item.id}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const whatsUrl = `https://wa.me/${region.whatsapp}?text=${encodeURIComponent(region.whatsappMessage)}`;

  return (
    <section className="menu-section" id="menu">
      <div className="menu-overlay"></div>
      <div className="menu-container">
        {/* Header */}
        <div className="menu-header">
          <h2 className="menu-title">{t('menu.title')}</h2>
          <div className="menu-currency-badge">
            {region.flag} {data.currency}
          </div>
        </div>

        {/* Tabs */}
        <div className="menu-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`menu-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fas ${tab.icon}`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenido */}
        <div className="menu-content">
          {activeCategory && (
            <>
              <p className="menu-cat-description">
                {t(`menu.cat_${activeTab}_desc`)}
              </p>

              {/* Items directos (empezar, bebidas) */}
              {activeCategory.items && (
                <div className="menu-items-grid">
                  {activeCategory.items.map(renderItemCard)}
                </div>
              )}

              {/* Subcategorías (tacos, kilo) */}
              {activeCategory.subcategories && (
                <div className="menu-subcategories">
                  {activeCategory.subcategories.map(renderSubcategory)}
                </div>
              )}
            </>
          )}
        </div>

        {/* CTA */}
        <div className="menu-cta">
          <a href={whatsUrl} target="_blank" rel="noopener noreferrer" className="btn-order-whatsapp">
            <i className="fab fa-whatsapp"></i>
            {t('menu.btn_order')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
