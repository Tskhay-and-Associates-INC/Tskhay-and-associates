// All of the website's words live in this file.
// To change text on the site, edit it here and commit (see README.md).
// Every statement comes from Konstantin's approved copy, the 2026 consulting
// offering deck, his CV, or his review comments.

const BASE = import.meta.env.BASE_URL;

export const site = {
  name: 'Tskhay & Associates',
  legalName: 'Tskhay & Associates, Inc.',
  email: 'konstantin@tskhayandassociates.com',
  linkedin: 'https://www.linkedin.com/in/konstantintskhay/',
};

// Links. "home(...)" points at a section of the homepage from any page.
export const home = (hash = '') => `${BASE}${hash}`;
export const contactPage = `${BASE}contact/`;
export const thankYouPage = `${BASE}thank-you/`;

export const nav = [
  { label: 'Services', href: home('#services') },
  { label: 'About', href: home('#about') },
  { label: 'Client Work', href: home('#client-work') },
  { label: 'Our Approach', href: home('#approach') },
  // External links open in a new tab.
  { label: 'Learn People Analytics', href: 'https://learn.practicalpeopleanalytics.com/', external: true },
  { label: 'Newsletter', href: 'https://peopleanalytics.substack.com/', external: true },
];

export const contactButton = { label: 'Email Us', href: 'https://tskhayandassociates.com/lets-talk' };

export const hero = {
  title: 'Make Your People Strategy Work.',
  body:
    'We use rigorous analytics to connect your workforce to your day-to-day operations, giving you clear, practical, executable programs that drive profitability and performance.',
    photo: {
    src: `${BASE}hero-data.svg`,
    alt: '',
    width: 800,
    height: 1000,
  },
};

export const stakes = {
  title: 'The True Cost of Ambiguity is Speed.',
  items: [
    {
      title: 'Stalled Execution',
      body: 'Without hard data on your human capital, every decision turns into a debate. Programs stall because leaders argue over assumptions instead of acting on facts.',
    },
    {
      title: 'Missed Windows',
      body: 'Strategic ambiguity slows down your workforce deployment. By the time a new initiative finally launches, the market has moved on—leaving you to solve yesterday’s problems.',
    },
    {
      title: 'Lagging Intelligence',
      body: 'If it takes months to pull data on a program, the insights are already useless. You end up reacting to your workforce instead of actively managing it.',
    },
  ],
};

export const value = {
  title: 'Strategy is nothing without execution.',
  intro: 'Here is how we help you move faster:',
  items: [
    {
      icon: 'decide',
      title: 'Decide on Data, Not Assumptions',
      body: 'We cut through prolonged boardroom debates by bringing rigorous, clear workforce analytics to the table. You get the clarity required to move from endless discussion to immediate action.',
    },
    {
      icon: 'momentum',
      title: 'Build Real Momentum',
      body: 'We don’t just hand you a theoretical strategy with a generic playbook; we help you operationalize it. We design practical workforce programs that you can deploy rapidly to stay on top of risks and accelerate growth relative to competitors.',
    },
    {
      icon: 'predict',
      title: 'Predict, Don’t React',
      body: 'Stop managing through firefighting. We equip you with the systems and insights you need to see exactly what is happening in your workforce right now, allowing you to proactively drive profitability.',
    },
  ],
};

export const services = {
  title: 'Services Focused On Outcomes',
  intro: 'Here is where we can help you turn your strategy into reality.',
  items: [
    {
      id: 'performance',
      icon: 'structure',
      title: 'Build Momentum in Performance',
      summary: 'Organize your teams and deploy your talent where your strategy needs them most.',
      includes: ['Organizational design', 'Layers and spans analysis', 'Talent mapping', 'Structure redesign', 'Talent strategy alignment'],
    },
    {
      id: 'culture-engagement',
      icon: 'people',
      title: 'Architect Your Culture & Engagement',
      summary: 'Connect culture, wellness, and engagement to the business results your strategy depends on.',
      includes: ['Engagement strategy', 'Engagement surveys', 'Focus groups', 'Lifecycle feedback', 'Pulse surveys'],
    },
    {
      id: 'compensation',
      icon: 'balance',
      title: 'Design Your Compensation and Recognition',
      summary: 'Pay people in a way that rewards the performance your strategy needs and keeps up with legislation.',
      includes: ['Job standardization', 'Compensation analysis', 'Pay equity', 'Pay philosophy', 'Total rewards', 'Sales compensation'],
    },
    {
      id: 'data-ai-literacy',
      icon: 'literacy',
      title: 'Enable Data and AI Literacy',
      summary: 'Give HR and business leaders the data and AI skills to act on your strategy.',
      includes: ['People analytics strategy', 'Data governance', 'HR dashboards', 'Advanced analytics', 'Retention analytics', 'Data literacy education'],
    },
  ],
};

export const about = {
  title: 'Workforce Strategy and Programs should never sit on a shelf.',
  paragraphs: [
    'I started Tskhay & Associates because I was tired of seeing brilliant HR leaders and business executives get stuck with ambiguous, theoretical strategies that fail in the real world. It is incredibly frustrating to spend immense time and money building these plans, only to watch them collect dust. You deserve practical, actionable solutions that actually make a difference for your workforce and your bottom line.',
    'As a former management consultant at Deloitte and a VP of Organizational Effectiveness at Top Hat, I know what it takes to build programs that get boardroom buy-in and actually work day-to-day. At Top Hat, the programs I built improved retention from 56% to 87% in 18 months and moved eNPS from −17 to +20. I hold a Ph.D. in Psychology from the University of Toronto and have spent over a decade advising organizations—from fast-growing start-ups to Fortune 500s—on how to use data to drive retention, engagement, and performance.',
    'You don’t need another dashboard that no one looks at. You need a partner who brings the substance, specificity, and analytical rigor required to put your strategy into action.',
  ],
  signature: 'Konstantin Tskhay, Ph.D., Managing Partner and Founder',
  photo: {
    src: `${BASE}konstantin-speaking.webp`,
    alt: 'Konstantin Tskhay leading a session',
    width: 800,
    height: 1000,
  },
  credentialsTitle: 'Background',
  credentials: [
    'Ph.D. in Psychology, University of Toronto',
    'Former Management Consultant, Deloitte',
    'Former VP of Organizational Effectiveness, Top Hat',
    'Founder of the Toronto People Analytics Group',
    'More than 25 peer-reviewed research publications',
  ],
};

export const clientWork = {
  title: 'Client Work',
  intro:
    'Konstantin has advised organizations from fast-growing start-ups to Fortune 500s, across financial services, consumer goods, manufacturing, energy and resources, public services, SaaS, education, and healthcare.',
    photo: {
    src: `${BASE}konstantin-tskhay.webp`,
    alt: 'Portrait of Konstantin Tskhay',
    width: 800,
    height: 1000,
  },
  stats: [
    { value: '30', label: 'Consulting projects delivered' },
    { value: '12+', label: 'Years of experience in strategic people analytics' },
    { value: '100+', label: 'Thought leadership articles published' },
    { value: '5', label: 'HR awards won' },
  ],
  examplesTitle: 'Examples of our analytical work',
  examplesNote: 'Client names are kept confidential.',
  examples: [
    {
      title: 'Organizational structure analytics',
      body: 'Mapped layers and spans of control across an organization and by department to show where the structure could be simplified.',
    },
    {
      title: 'Assessment validation',
      body: 'Tested whether a personality assessment predicted sales performance. The analysis found no evidence that it did.',
    },
    {
      title: 'Engagement analytics',
      body: 'Analyzed how engagement survey measures relate to one another and where departments rated questions differently.',
    },
    {
      title: 'Performance and inclusion review',
      body: 'Tracked how performance ratings shifted over three review cycles and tested whether outcomes differed by diversity, inclusion, and belonging factors.',
    },
  ],
};

export const approach = {
  title: 'Here Is How We Bring Your Strategy to Reality',
  steps: [
    {
      title: 'Discovery Call',
      body: 'We begin by cutting through the noise to pinpoint the exact workforce problem you are trying to solve and why. From there, we assess exactly where and how we can help you address it by scoping a solution.',
    },
    {
      title: 'Deep-Dive Current State Analysis',
      body: 'We analyze your organization’s quantitative and qualitative data to establish an objective baseline. This deep dive gives us an intimate, fact-based understanding of exactly where your organization is starting.',
    },
    {
      title: 'Design Tailored, Practical Solutions',
      body: 'We partner directly with your leadership and operational teams to architect highly specific strategies for your unique scenarios. We replace complexity with clarity by providing simple tools, systems, and processes that make sense in your context.',
    },
    {
      title: 'Sustainable Deployment',
      body: 'We guide the real-world rollout—including change management, system adoption, and communication. We ensure your programs don’t just sit on a shelf but exist sustainably to drive momentum and profitability.',
    },
  ],
};

export const contact = {
  title: 'Let’s Talk',
  body: 'Tell us about the workforce or people analytics challenge you’re working on, and we’ll reply to set up a time to talk.',
};

// CONTACT FORM SERVICE
// GitHub Pages cannot receive form messages by itself, so the form sends them through
// a free form service such as Formspree (formspree.io). Paste the form's address
// between the quotes, for example: 'https://formspree.io/f/abcdwxyz'
// While this is empty, the contact page shows an "Email Us" button instead of the form.
export const formEndpoint = '';

// The separate contact page (contact/index.html).
export const contactForm = {
  title: 'Contact Us',
  intro: 'Tell us about the workforce or people analytics challenge you’re working on, and we’ll reply to set up a time to talk.',
  fields: {
    name: 'Name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'How can we help?',
  },
  submit: 'Send message',
  sending: 'Sending…',
  error: 'Sorry, your message didn’t send. Please try again, or email us directly.',
  emailButton: 'Email Us',
  privacy: 'We only use your details to reply to your message.',
  emailAlt: 'Prefer email?',
};

export const thankYou = {
  title: 'Thank you.',
  body: 'Your message has been sent. We’ll reply soon.',
  back: 'Back to the homepage',
};
