import { contact, contactButton, site } from '../content/site.js';

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <h2 id="contact-title">{contact.title}</h2>
        <div className="contact-copy">
          <p className="lead">{contact.body}</p>
          <div className="actions">
            <a className="button button-light" href={contactButton.href}>
              {contactButton.label}
            </a>
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
