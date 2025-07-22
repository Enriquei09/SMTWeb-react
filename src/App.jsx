import { Navbar, HeroSection, AboutUs, Stats, Ubicacion, Barbacoa, Footer } from "./components";


function App() {
  return (
    <div>
      <Navbar />
  <div id="home"><HeroSection /></div>
  <div id="about"><AboutUs /></div>
  <div id="stats"><Stats /></div>
  <div id="ubicacion"><Ubicacion /></div>
  <div id="barbacoa"><Barbacoa /></div>
  <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
