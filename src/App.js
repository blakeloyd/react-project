import './App.css';
import Header from './components/header';
import Hero from './components/HeroComponent';
import CategorySection from './components/CategorySectionComponent';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Hero />
      <CategorySection />
      <Footer />
      </>
    </div>
  );
}

export default App;
