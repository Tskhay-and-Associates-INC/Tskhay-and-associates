import { thankYou, home } from '../content/site.js';

export default function ThankYouPage() {
  return (
    <section className="section page-section" aria-labelledby="thanks-title">
      <div className="container">
        <header className="section-head">
          <h1 id="thanks-title">{thankYou.title}</h1>
          <p className="section-intro">{thankYou.body}</p>
        </header>
        <a className="button" href={home()}>
          {thankYou.back}
        </a>
      </div>
    </section>
  );
}
