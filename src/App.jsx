import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RecipeGrid from './components/RecipeGrid';
import recipes from './data/recipes';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <RecipeGrid recipes={recipes} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;