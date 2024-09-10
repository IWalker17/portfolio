import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }, {
    path: '/about',
    element: <About />
  }, {
    path: '/skills',
    element: <Skills />,
  }, {
    path: '/projects',
    element: <Projects />
  }, {
    path: '/contact',
    element: <Contact />,
  }, {
    path: '/blog',
    element: <Blog />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
