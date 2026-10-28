import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './setup.js';
import Layout from './Layout.jsx';
import ContactPage from './components/ContactPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <ContactPage />
    </Layout>
  </StrictMode>
);
