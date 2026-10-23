import { nav, site, contactButton } from '../content/site.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <img
          className="footer-logo"
          src={`${import.meta.env.BASE_URL}logo-tskhay-associates-white.png`}
          alt={site.name}
          width="154"
          height="20"
          loading="lazy"
        />
        <nav aria-label="Footer">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
            <li>
              <a href={contactButton.href}>Contact</a>
            </li>
          </ul>
        </nav>
        <ul className="footer-contact">
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>
        <p className="copyright">
          © {year} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
