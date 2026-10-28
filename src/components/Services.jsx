import { services } from '../content/site.js';
import Icon from './Icon.jsx';

export default function Services() {
  return (
    <section id="services" className="section section-alt" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <h2 id="services-title">{services.title}</h2>
          <p className="section-intro">{services.intro}</p>
        </header>
        <div className="service-grid">
          {services.items.map((s) => (
            <article key={s.id} id={s.id} className="service-card" aria-labelledby={`${s.id}-title`}>
              <Icon name={s.icon} size={32} className="service-icon" />
              <h3 id={`${s.id}-title`}>{s.title}</h3>
              <p className="service-summary">{s.summary}</p>
              <ul className="tags" aria-label="What's included">
                {s.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
