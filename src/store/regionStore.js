import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { REGIONS, DEFAULT_REGION } from '../config/regions';
import i18n from '../config/i18n';

const useRegionStore = create(
  persist(
    (set, get) => ({
      regionId: DEFAULT_REGION,
      region: REGIONS[DEFAULT_REGION],

      setRegion: (id) => {
        const region = REGIONS[id];
        if (!region) return;
        i18n.changeLanguage(region.language);
        set({ regionId: id, region });
      },

      getWhatsAppUrl: () => {
        const { region } = get();
        const msg = encodeURIComponent(region.whatsappMessage);
        return `https://wa.me/${region.whatsapp}?text=${msg}`;
      },
    }),
    {
      name: 'sabores-region',
      partialize: (state) => ({ regionId: state.regionId }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const region = REGIONS[state.regionId] || REGIONS[DEFAULT_REGION];
          state.region = region;
          i18n.changeLanguage(region.language);
        }
      },
    }
  )
);

export default useRegionStore;
