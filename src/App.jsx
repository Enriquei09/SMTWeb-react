import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import useRegionStore from './store/regionStore';
import {
  Navbar, HeroSection, AboutUs, Stats, Ubicacion,
  Barbacoa, Menu, Footer, RegionSelector, ScrollToTop, WhatsAppFloat
} from './components';

/* Página principal con todas las secciones */
const HomePage = () => (
  <>
    <div id="home"><HeroSection /></div>
    <div id="about"><AboutUs /></div>
    <div id="stats"><Stats /></div>
    <div id="menu"><Menu /></div>
    <div id="barbacoa"><Barbacoa /></div>
    <div id="ubicacion"><Ubicacion /></div>
    <div id="footer"><Footer /></div>
  </>
);

/* Layout que envuelve las rutas con región */
const RegionLayout = () => {
  const { regionId } = useParams();
  const setRegion = useRegionStore((s) => s.setRegion);

  useEffect(() => {
    if (regionId === 'mx' || regionId === 'ca') {
      setRegion(regionId);
    }
  }, [regionId, setRegion]);

  if (regionId !== 'mx' && regionId !== 'ca') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <HomePage />
      <ScrollToTop />
      <WhatsAppFloat />
    </>
  );
};

function App() {
  const regionId = useRegionStore((s) => s.regionId);

  return (
    <Routes>
      {/* Selector de región */}
      <Route path="/" element={<RegionSelector />} />
      {/* Rutas por región */}
      <Route path="/:regionId" element={<RegionLayout />} />
      {/* Fallback */}
      <Route path="*" element={<Navigate to={`/${regionId}`} replace />} />
    </Routes>
  );
}

export default App;
