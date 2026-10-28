import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Shared frame for the contact and thank-you pages.
export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
