// ============================================
// DATOS DEL MENÚ POR REGIÓN
// ============================================

const menuData = {
  // ========================
  //  MENÚ MÉXICO (MXN)
  // ========================
  mx: {
    currency: 'MXN',
    symbol: '$',
    categories: [
      {
        id: 'empezar',
        icon: 'fa-pepper-hot',
        items: [
          {
            id: 'pozole',
            prices: [
              { label: 'Plato', price: 55 },
              { label: 'Litro', price: 90 },
            ],
          },
          {
            id: 'volcanes',
            prices: [{ price: 25 }],
          },
          {
            id: 'empanadas',
            prices: [{ price: 20 }],
          },
          {
            id: 'tostadas',
            prices: [{ price: 20 }],
          },
        ],
      },
      {
        id: 'tacos',
        icon: 'fa-utensils',
        subcategories: [
          {
            id: 'cazuelas',
            pricePerUnit: 18,
            items: [
              { id: 'tinga', icon: '🍗' },
              { id: 'cerdo_adobado', icon: '🍖' },
              { id: 'carnitas', icon: '🥘' },
              { id: 'chicharron', icon: '🧈' },
              { id: 'bistec_nopales', icon: '🌵' },
              { id: 'papa_chorizo', icon: '🥔' },
              { id: 'papa_carne', icon: '🥘' },
              { id: 'migas', icon: '✨' },
            ],
          },
          {
            id: 'parrilla',
            pricePerUnit: 20,
            items: [
              { id: 'pastor', icon: '🌮' },
              { id: 'chorizo', icon: '🔴' },
              { id: 'bistec', icon: '🥩' },
              { id: 'campechano', icon: '🔥' },
            ],
          },
        ],
      },
      {
        id: 'kilo',
        icon: 'fa-weight-hanging',
        subcategories: [
          {
            id: 'guisados_kilo',
            pricePerKilo: 240,
            items: [
              { id: 'tinga', icon: '🍗' },
              { id: 'cerdo_adobado', icon: '🍖' },
              { id: 'carnitas', icon: '🥘' },
              { id: 'chicharron', icon: '🧈' },
              { id: 'bistec_nopales', icon: '🌵' },
              { id: 'papa_chorizo', icon: '🥔' },
              { id: 'papa_carne', icon: '🥘' },
              { id: 'migas', icon: '✨' },
            ],
          },
          {
            id: 'carne_tacos_kilo',
            pricePerKilo: 310,
            items: [
              { id: 'pastor', icon: '🌮' },
              { id: 'chorizo', icon: '🔴' },
              { id: 'bistec', icon: '🥩' },
              { id: 'campechano', icon: '🔥' },
            ],
          },
        ],
      },
      {
        id: 'bebidas',
        icon: 'fa-glass-water',
        items: [
          {
            id: 'agua_sabor',
            prices: [{ price: 15 }],
          },
          {
            id: 'agua_natural',
            prices: [{ price: 15 }],
          },
          {
            id: 'refrescos',
            prices: [{ price: 25 }],
          },
          {
            id: 'cafe_olla',
            prices: [{ price: 18 }],
          },
        ],
      },
    ],
  },

  // ========================
  //  MENÚ CANADÁ (CAD)
  // ========================
  ca: {
    currency: 'CAD',
    symbol: '$',
    categories: [
      {
        id: 'empezar',
        icon: 'fa-pepper-hot',
        items: [
          {
            id: 'pozole',
            prices: [
              { label: 'Bowl', price: 12 },
              { label: 'Litre', price: 20 },
            ],
          },
          {
            id: 'volcanes',
            prices: [{ price: 6 }],
          },
          {
            id: 'empanadas',
            prices: [{ price: 5 }],
          },
          {
            id: 'tostadas',
            prices: [{ price: 5 }],
          },
        ],
      },
      {
        id: 'tacos',
        icon: 'fa-utensils',
        subcategories: [
          {
            id: 'cazuelas',
            pricePerUnit: 4.5,
            items: [
              { id: 'tinga', icon: '🍗' },
              { id: 'cerdo_adobado', icon: '🍖' },
              { id: 'carnitas', icon: '🥘' },
              { id: 'chicharron', icon: '🧈' },
              { id: 'bistec_nopales', icon: '🌵' },
              { id: 'papa_chorizo', icon: '🥔' },
              { id: 'papa_carne', icon: '🥘' },
              { id: 'migas', icon: '✨' },
            ],
          },
          {
            id: 'parrilla',
            pricePerUnit: 5,
            items: [
              { id: 'pastor', icon: '🌮' },
              { id: 'chorizo', icon: '🔴' },
              { id: 'bistec', icon: '🥩' },
              { id: 'campechano', icon: '🔥' },
            ],
          },
        ],
      },
      {
        id: 'kilo',
        icon: 'fa-weight-hanging',
        subcategories: [
          {
            id: 'guisados_kilo',
            pricePerKilo: 55,
            items: [
              { id: 'tinga', icon: '🍗' },
              { id: 'cerdo_adobado', icon: '🍖' },
              { id: 'carnitas', icon: '🥘' },
              { id: 'chicharron', icon: '🧈' },
              { id: 'bistec_nopales', icon: '🌵' },
              { id: 'papa_chorizo', icon: '🥔' },
              { id: 'papa_carne', icon: '🥘' },
              { id: 'migas', icon: '✨' },
            ],
          },
          {
            id: 'carne_tacos_kilo',
            pricePerKilo: 70,
            items: [
              { id: 'pastor', icon: '🌮' },
              { id: 'chorizo', icon: '🔴' },
              { id: 'bistec', icon: '🥩' },
              { id: 'campechano', icon: '🔥' },
            ],
          },
        ],
      },
      {
        id: 'bebidas',
        icon: 'fa-glass-water',
        items: [
          {
            id: 'agua_sabor',
            prices: [{ price: 4 }],
          },
          {
            id: 'agua_natural',
            prices: [{ price: 3 }],
          },
          {
            id: 'refrescos',
            prices: [{ price: 5 }],
          },
          {
            id: 'cafe_olla',
            prices: [{ price: 4.5 }],
          },
        ],
      },
    ],
  },
};

export default menuData;
