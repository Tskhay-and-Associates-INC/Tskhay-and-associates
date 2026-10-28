import { clients, clientsTitle, testimonials } from '../content/clients.js';

// Shows nothing until approved client logos or quotes are listed in src/content/clients.js.
export default function Clients() {
  if (clients.length === 0 && testimonials.length === 0) return null;
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container">
        <h2 id="clients-title" className="clients-title">
          {clientsTitle}
        </h2>
        {clients.length > 0 && (
          <ul className="logo-row">
            {clients.map((c) => (
              <li key={c.name}>
                <img src={`${import.meta.env.BASE_URL}clients/${c.file}`} alt={c.name} loading="lazy" />
              </li>
            ))}
          </ul>
        )}
        {testimonials.length > 0 && (
          <div className="quotes">
            {testimonials.map((t) => (
              <figure key={t.name} className="quote">
                <blockquote>
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption>
                  <span className="quote-name">{t.name}</span>
                  <span className="quote-role">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
