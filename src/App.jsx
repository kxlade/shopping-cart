import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Cart from "./pages/Cart";
import AboutPage from './pages/About';
import Body from './components/Body';
import TruckLoading from './TruckLoding';


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
  const [isNavigating, setIsNavigating] = useState(false);
  const loadingTimerRef = useRef(null);

  const navigate = (nextPage) => {
    if (nextPage === page) return;

    if (nextPage === 'cart' || nextPage === 'shop') {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
      setIsNavigating(true);
      loadingTimerRef.current = setTimeout(() => {
        setPage(nextPage);
        setIsNavigating(false);
      }, 450);
      return;
    }

    setPage(nextPage);
  };

  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="app-wrapper">
      {isNavigating && (
        <div className="page-loader" role="status" aria-live="polite">
          <TruckLoading />
          <span className="page-loader_text">Loading…</span>
        </div>
      )}

      <Navbar page={page} setPage={navigate} />

      <main className="content">
        {renderPage(page, navigate)}
      </main>
      <Body page={page} setPage={navigate} />

      <Footer setPage={navigate} />
    </div>
  );
}

export default App;
