import { stakes } from '../content/site.js';

export default function Stakes() {
  return (
    <section className="section section-alt" aria-labelledby="stakes-title">
      <div className="container">
        <header className="section-head">
          <h2 id="stakes-title">{stakes.title}</h2>
        </header>
        <ul className="columns-3">
          {stakes.items.map((item) => (
            <li key={item.title} className="column">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
