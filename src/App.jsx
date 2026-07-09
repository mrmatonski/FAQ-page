import { useEffect, useState } from 'react'
import './App.css'

const faqs = [
  {
    question: 'What is net metering?',
    answer:
      'Net metering is the billing setup that gives you credit when your solar system sends extra daytime power back to the grid. Later, when your home needs more power than the panels are making, those credits help offset what you pull from the utility.',
  },
  {
    question: 'Why add more panels instead of staying with the utility?',
    answer:
      'Every extra panel can replace more utility kWh with power made on your roof. That matters because utility power is exposed to fuel costs, grid upgrades, storm hardening, transmission projects, and new demand from AI data centers.',
  },
  {
    question: 'Will more panels wipe out my whole bill?',
    answer:
      'Usually not completely. Most homes still have connection fees, minimum charges, taxes, or non-bypassable charges. The goal is to reduce the expensive energy portion of the bill and bank more credits when the sun is strong.',
  },
  {
    question: 'Can I add panels to an existing solar system?',
    answer:
      'Yes, if your roof space, electrical panel, inverter capacity, utility rules, and local permits support it. A good add-on design checks your last 12 months of usage, the current system size, and whether storage would improve the payoff.',
  },
  {
    question: 'What if my utility changes the net metering rules?',
    answer:
      'Rules vary by state and utility, and many programs are changing. That is exactly why homeowners often want to act sooner: the strongest credit structures can become less generous over time.',
  },
  {
    question: 'Do extra panels help if I plan to buy an EV or heat pump?',
    answer:
      'Yes. EV charging, heat pumps, pool pumps, and new appliances can push a home back into high utility usage. Adding panels now can cover tomorrow’s load before that new usage becomes another monthly bill problem.',
  },
]

const pressurePoints = [
  'AI data centers are projected to be one of the fastest-growing electricity loads this decade.',
  'More load means more generation, transmission, substations, and reliability spending.',
  'When those costs are spread across customers, families can end up paying for a grid built around massive new users.',
]

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('solar-faq-theme')

    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    localStorage.setItem('solar-faq-theme', theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <main className="page-shell" data-theme={theme}>
      <div className="animated-sky" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${nextTheme} mode`}
        onClick={() => setTheme(nextTheme)}
      >
        <span className="toggle-track">
          <span className="toggle-thumb"></span>
        </span>
        <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
      </button>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Additional Solar FAQ</p>
          <h1>Stop buying tomorrow&apos;s expensive power from the utility.</h1>
          <p className="hero-lede">
            If your roof has room for more panels, your current bill is only part
            of the story. Utility rates are under pressure from AI data centers,
            grid upgrades, and rising demand. Additional solar helps you lock in
            more of your own supply before those costs show up month after month.
          </p>
          <div className="hero-actions" aria-label="Page sections">
            <a href="#video">Watch the explainer</a>
            <a href="#faq">Read FAQs</a>
          </div>
        </div>

        <aside className="bill-card" aria-label="Utility bill comparison">
          <div className="energy-orbit" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="meter-row">
            <span>Utility exposure</span>
            <strong>Rising</strong>
          </div>
          <div className="bill-graph" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            More panels shift more of your home from buying power to producing
            power. That is the cleanest way to reduce your exposure to future
            utility increases.
          </p>
        </aside>
      </section>

      <section className="video-section" id="video">
        <div className="section-heading">
          <p className="eyebrow">Two-minute concept</p>
          <h2>Net metering, explained without the jargon</h2>
          <p>
            Watch how excess solar becomes bill credit, why production timing
            matters, and why adding panels can be more valuable before rates and
            rules get worse.
          </p>
        </div>

        <div className="video-layout">
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/62UmQoKUBR4"
              title="How net metering works for solar homes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-notes">
            <h3>What to listen for</h3>
            <ul>
              <li>Solar covers your home first.</li>
              <li>Extra daytime power earns credits.</li>
              <li>Credits offset utility power later.</li>
              <li>More panels can create more protection from rate hikes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rate-section">
        <div className="data-rush" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="section-heading">
          <p className="eyebrow">Why waiting is risky</p>
          <h2>The utility bill is becoming a moving target</h2>
          <p>
            Large AI data centers are adding serious demand to the grid. Even if
            you never use those services, the infrastructure to serve them can
            still affect the rates ordinary customers pay.
          </p>
        </div>

        <div className="pressure-grid">
          {pressurePoints.map((point, index) => (
            <article className="pressure-card" key={point}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Common questions</p>
          <h2>Adding more rooftop panels</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">Bottom line</p>
          <h2>Every kWh you make is one less kWh you have to buy later.</h2>
          <p>
            The utility model asks you to accept future rate increases. Additional
            solar gives you a way to produce more of your own energy, use net
            metering when available, and keep more control on your roof.
          </p>
        </div>
        <a href="#faq">Review the FAQs</a>
      </section>

      <footer>
        <p className="credit">Created by Michael Maton</p>
        <p>
          Sources: International Energy Agency Energy and AI outlook, U.S. Energy
          Information Administration data-center electricity demand analysis, and
          SEIA net metering guidance.
        </p>
      </footer>
    </main>
  )
}

export default App
