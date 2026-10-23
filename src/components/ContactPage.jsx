import { useState } from 'react';
import { contactForm, formEndpoint, site, thankYouPage } from '../content/site.js';

// The form sends to the form service set in src/content/site.js (formEndpoint).
// Until one is set, the page offers a working email button instead of a form
// that couldn't deliver messages.
export default function ContactPage() {
  const f = contactForm.fields;
  const [status, setStatus] = useState('idle'); // idle | sending | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      window.location.assign(thankYouPage);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section page-section" aria-labelledby="contact-page-title">
      <div className="container contact-page">
        <header className="section-head">
          <h1 id="contact-page-title">{contactForm.title}</h1>
          <p className="section-intro">{contactForm.intro}</p>
        </header>

        {formEndpoint ? (
          <>
            <form className="form" method="POST" action={formEndpoint} onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New message from the T&A website" />
              <p className="visually-hidden">
                <label>
                  Leave this field empty <input name="_gotcha" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="field">
                <label htmlFor="cf-name">{f.name}</label>
                <input id="cf-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="cf-email">{f.email}</label>
                <input id="cf-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="cf-company">{f.company}</label>
                <input id="cf-company" name="company" type="text" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="cf-message">{f.message}</label>
                <textarea id="cf-message" name="message" rows="6" required />
              </div>

              <button type="submit" className="button" disabled={status === 'sending'}>
                {status === 'sending' ? contactForm.sending : contactForm.submit}
              </button>
              <p className="form-error" role="alert">
                {status === 'error' ? contactForm.error : ''}
              </p>
              <p className="muted form-note">{contactForm.privacy}</p>
            </form>

            <p className="form-alt">
              {contactForm.emailAlt} <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </>
        ) : (
          <div className="actions">
            <a className="button" href={`mailto:${site.email}`}>
              {contactForm.emailButton}
            </a>
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
