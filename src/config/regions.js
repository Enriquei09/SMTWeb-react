// ============================================
// CONFIGURACIÓN DE REGIONES — México y Canadá
// ============================================

export const REGIONS = {
  mx: {
    id: 'mx',
    country: 'México',
    countryCode: 'MX',
    flag: '🇲🇽',
    currency: 'MXN',
    currencySymbol: '$',
    currencyLabel: 'MXN',
    locale: 'es-MX',
    language: 'es',
    timezone: 'America/Mexico_City',

    // Contacto
    phone: '+52 55 1234 5678',
    whatsapp: '5215512345678',
    whatsappMessage: '¡Hola! Quiero hacer un pedido 🌮',
    email: 'mexico@sabores.com',

    // Redes sociales
    social: {
      facebook: 'https://facebook.com/saboresmexico',
      instagram: 'https://instagram.com/saboresmexico',
      tiktok: 'https://www.tiktok.com/@saboresca',
      twitter: 'https://twitter.com/saboresmexico',
      youtube: 'https://youtube.com/@saboresmexico',
    },

    // Videos TikTok para la galería (reemplazar con IDs reales)
    // Para obtener el ID: abre el video en TikTok, el ID es el número al final de la URL
    // Ejemplo: https://www.tiktok.com/@usuario/video/7123456789012345678 → ID: 7123456789012345678
    tiktokVideos: [
      { id: '7497046041548672311', title: 'Tortillas a Mano' },
      { id: '7521117570477444370', title: 'Birria' },
      { id: '7509665726374939910', title: 'Promocion' },
    ],

    // Horarios
    hours: {
      weekday: { open: '10:00', close: '22:00', label: 'Lunes a Viernes' },
      weekend: { open: '09:00', close: '23:00', label: 'Sábado y Domingo' },
      display: 'Lunes–Domingo: 10:00am - 10:00pm',
    },

    // Barbacoa disponibilidad
    barbacoa: {
      days: ['Sábado', 'Domingo'],
      displayText: 'Disponible solo sábados y domingos',
    },

    // Ubicación (placeholder — sin dirección aún)
    location: {
      hasAddress: false,
      city: 'Ciudad de México',
      state: 'CDMX',
      country: 'México',
      address: '',
      postalCode: '',
      coordinates: { lat: 19.4326, lng: -99.1332 },
      mapUrl: '',
    },

    // Stats
    stats: {
      dishes: 30,
      customers: 200,
      flavor: 100,
      freshIngredients: 100,
    },
  },

  ca: {
    id: 'ca',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    currency: 'CAD',
    currencySymbol: '$',
    currencyLabel: 'CAD',
    locale: 'en-CA',
    language: 'en',
    timezone: 'America/Vancouver',

    // Contacto
    phone: '+1 250 123 4567',
    whatsapp: '12501234567',
    whatsappMessage: 'Hi! I would like to place an order 🌮',
    email: 'canada@sabores.com',

    // Redes sociales
    social: {
      facebook: 'https://facebook.com/saborescanada',
      instagram: 'https://instagram.com/saborescanada',
      tiktok: 'https://www.tiktok.com/@saboresca',
      twitter: 'https://twitter.com/saborescanada',
      youtube: 'https://youtube.com/@saborescanada',
    },

    // Videos TikTok para la galería (reemplazar con IDs reales)
    tiktokVideos: [
      { id: '7456041647498677510', title: 'Traditional Barbacoa' },
      { id: '7456041647498677510', title: 'Tacos al Pastor' },
      { id: '7456041647498677510', title: 'Homemade Pozole' },
    ],

    // Horarios
    hours: {
      weekday: { open: '10:00', close: '22:00', label: 'Monday to Friday' },
      weekend: { open: '09:00', close: '23:00', label: 'Saturday & Sunday' },
      display: 'Monday–Sunday: 10:00am – 10:00pm',
    },

    // Barbacoa disponibilidad
    barbacoa: {
      days: ['Friday', 'Saturday', 'Sunday'],
      displayText: 'Available only Friday to Sunday',
    },

    // Ubicación (placeholder — sin dirección aún)
    location: {
      hasAddress: false,
      city: 'Kelowna',
      state: 'BC',
      country: 'Canada',
      address: '',
      postalCode: '',
      coordinates: { lat: 49.888, lng: -119.496 },
      mapUrl: '',
    },

    // Stats
    stats: {
      dishes: 20,
      customers: 100,
      flavor: 100,
      freshIngredients: 100,
    },
  },
};

export const DEFAULT_REGION = 'mx';

export const getRegion = (id) => REGIONS[id] || REGIONS[DEFAULT_REGION];
