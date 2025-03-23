import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Card } from './pages/Card';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router basename="/react-food">
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Card />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export { App };
