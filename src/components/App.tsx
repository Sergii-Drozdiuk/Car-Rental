import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Catalog = lazy(() => import('../pages/Catalog'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>;
};
