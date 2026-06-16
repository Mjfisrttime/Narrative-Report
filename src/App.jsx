import React from 'react';
import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { navItems } from './config/navigation';

import { Home } from './pages/Home';
import { ActivityLogs } from './pages/ActivityLogs';
import { Skills } from './pages/Skills';
import { Gallery } from './pages/Gallery';
import { Reflections } from './pages/Reflections';
import { AboutCompany } from './pages/AboutCompany';
import { Certificate } from './pages/Certificate';

const pageComponents = {
  Home,
  ActivityLogs,
  Skills,
  Gallery,
  Reflections,
  AboutCompany,
  Certificate
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {navItems.map((item) => {
          const PageComponent = pageComponents[item.pageKey];
          return (
            <Route 
              key={item.path} 
              path={item.path} 
              element={PageComponent ? <PageComponent /> : <div className="text-white p-8">Not Found</div>} 
            />
          );
        })}
        <Route path="*" element={
          <div className="text-white text-center p-20">
            <h2 className="text-4xl font-bold text-[#ff716c] font-sora mb-4">404</h2>
            <p className="text-[#83b2c8]">Page not found.</p>
          </div>
        } />
      </Route>
    </Routes>
  );
};

export default App;
