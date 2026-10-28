import { useEffect, useState } from 'react';
import { nav, site, home, contactButton } from '../content/site.js';
import Icon from './Icon.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key, and if the window grows to desktop width.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const wide = window.matchMedia('(min-width: 1120px)');
    const onWide = (e) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={home()} onClick={close}>
          <img
            src={`${import.meta.env.BASE_URL}logo-tskhay-associates.png`}
            alt={site.name}
            width="185"
            height="24"
          />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={close}>
                    {item.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <a href={item.href} onClick={close}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a className="button button-outline button-small" href={contactButton.href} onClick={close}>
                {contactButton.label}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
