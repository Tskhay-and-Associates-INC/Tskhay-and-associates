import { hero, contactButton } from '../content/site.js';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">{hero.title}</h1>
          <p className="lead">{hero.body}</p>
          <div className="actions">
            <a className="button" href={contactButton.href}>
              {contactButton.label}
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src={hero.photo.src}
            alt={hero.photo.alt}
            width={hero.photo.width}
            height={hero.photo.height}
            fetchpriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
