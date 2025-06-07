import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Section from './pages/Section/Section';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/section/:section/*" element={<Section />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;