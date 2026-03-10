import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Cart from "./pages/Cart";
import AboutPage from './pages/About';

// We'll create this component next if you don't have it yet
// For now it's a placeholder so the app doesn't crash


const renderPage = (page, setPage) => {
  switch (page) {
    case 'home':
      return (
        <>
          <Header setPage={setPage} />
          <ProductList />
        </>
      );

    case 'shop':
      return <ProductList />;

    case 'about':
      return <AboutPage />;

    case 'cart':
      return <Cart setPage={setPage} />;

    default:
      return (
        <>
          <Header setPage={setPage} />
          <ProductList />
        </>
      );
  }
};

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-wrapper">
      <Navbar page={page} setPage={setPage} />

      <main className="content">{renderPage(page, setPage)}</main>

      <Footer setPage={setPage} />
    </div>
  );
}

export default App;