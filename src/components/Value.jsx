import { value } from '../content/site.js';
import Icon from './Icon.jsx';

export default function Value() {
  return (
    <section className="section" aria-labelledby="value-title">
      <div className="container">
        <header className="section-head">
          <h2 id="value-title">{value.title}</h2>
          <p className="section-intro">{value.intro}</p>
        </header>
        <ul className="columns-3">
          {value.items.map((item) => (
            <li key={item.title} className="column">
              <Icon name={item.icon} size={30} className="column-icon" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
