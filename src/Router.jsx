import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import BaseJoin from './pages/BaseJoin/BaseJoin';
import Join from './pages/Join/Join';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/basejoin" element={<BaseJoin />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
