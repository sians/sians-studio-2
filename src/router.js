import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Skill } from './pages';

const routes = [
  { path: '/', component: Home },
  { path: '/skills/:slug', component: Skill },
  { path: '*', component: Home },
];

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={`route-${index}`} 
              path={route.path} 
              element={<route.component {...route.props} />} 
            />
          );
        })}
      </Routes>
    </HashRouter>
  );
}