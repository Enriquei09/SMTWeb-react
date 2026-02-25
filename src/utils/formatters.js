// ============================================
// UTILIDADES DE FORMATO
// ============================================

/**
 * Formatea un precio con símbolo de moneda
 */
export const formatPrice = (amount, currency = 'MXN') => {
  const locale = currency === 'MXN' ? 'es-MX' : 'en-CA';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Genera el enlace de WhatsApp
 */
export const getWhatsAppLink = (number, message = '') => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
};

/**
 * Formatea número de teléfono para display
 */
export const formatPhone = (phone) => phone;

/**
 * Obtiene saludo según hora del día
 */
export const getGreeting = (lang = 'es') => {
  const hour = new Date().getHours();
  if (lang === 'es') {
    if (hour < 12) return '¡Buenos días!';
    if (hour < 18) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  }
  if (hour < 12) return 'Good morning!';
  if (hour < 18) return 'Good afternoon!';
  return 'Good evening!';
};
