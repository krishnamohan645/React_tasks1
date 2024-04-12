// import logo from './logo.svg';
import './App.css';
import DarkVariantExample from './reactBootstrap/carousel';
import CollapsibleExample from './reactBootstrap/navBar';
import AboutDetails from './reactBootstrap/about';
import InterNational from './reactBootstrap/international';
import IndiaService from './reactBootstrap/india';




function App() {
  return (
    <div className="App">
      <CollapsibleExample/>
      <DarkVariantExample/>
      <AboutDetails/>
      <InterNational/>
      <IndiaService/>
      </div>
  );
}

export default App;
