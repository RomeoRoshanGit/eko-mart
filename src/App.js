import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import ComparePage from './pages/ComparePage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import VendorsPage from './pages/VendorsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/vendors" element={<VendorsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
