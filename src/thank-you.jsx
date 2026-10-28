import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './setup.js';
import Layout from './Layout.jsx';
import ThankYouPage from './components/ThankYouPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <ThankYouPage />
    </Layout>
  </StrictMode>
);
