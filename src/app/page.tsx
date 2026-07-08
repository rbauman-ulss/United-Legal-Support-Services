import Link from 'next/link';

const DEMO_EMAIL = 'mailto:rbauman@texancs.com,jmaldonado@texancs.com?subject=Texan%20Core%20Solutions%20Demo%20Request';

const VALUES = [
  ['Texan Values', 'We bring discipline, loyalty, and accountability to every file.'],
  ['Proven Processes', 'Structured legal-operations workflows reduce bottlenecks and rework.'],
  ['Experienced Professionals', 'PI-focused support teams understand pre-litigation pressure points.'],
  ['Nationwide Support', 'Remote operations support for law firms across the United States.'],
  ['Growth Focused', 'Designed to help firms increase capacity without adding internal staff.'],
  ['Trusted Partner', 'Built for confidential, long-term operational partnership.'],
];

export default function MarketingPage() {
  return (
    <main className="texan-site">
      <div className="texan-topbar">
        <a href="tel:+15125649925">Richelle 512-564-9925</a>
        <span>Proudly serving personal injury law firms nationwide</span>
        <a href="tel:+12819790372">Jackie 281-979-0372</a>
      </div>

      <nav className="texan-nav" aria-label="Primary navigation">
        <a className="texan-logo" href="#home" aria-label="Texan Core Solutions home">
          <img src="/texan-assets/texan-logo-full.png" alt="Texan Core Solutions" />
        </a>
        <div className="texan-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href={DEMO_EMAIL}>Schedule a Demo</a>
          <Link href="/login">Client/Firm Portal</Link>
        </div>
      </nav>

      <section className="texan-hero" id="home">
        <div className="texan-hero-copy">
          <h1>
            <span>Texan Values.</span>
            Nationwide Support.
          </h1>
          <h2>Helping personal injury law firms scale without hiring more staff</h2>
          <p>
            Texan Core Solutions provides pre-litigation and legal operations support that integrates into
            your systems and workflows to keep cases moving, improve client communication, and reduce
            operational bottlenecks.
          </p>
          <div className="texan-cta-row">
            <a className="btn" href={DEMO_EMAIL}>Schedule a Consultation</a>
            <Link className="btn secondary" href="/login">Open Demo Portal</Link>
          </div>
          <p className="texan-attorney-note">
            We do our work under the supervision of a licensed attorney.
          </p>
        </div>
        <div className="texan-hero-art" aria-label="Nationwide Texan Core Solutions support">
          <img className="texan-hero-map-img" src="/texan-assets/hero-us-map-houston-client.png" alt="United States support map with Texan Core Solutions mark over Houston skyline" />
        </div>
      </section>

      <section className="texan-icon-strip" aria-label="Texan Core Solutions differentiators">
        {VALUES.map(([title, body]) => (
          <article key={title}>
            <div className="texan-line-icon" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="texan-image-strip texan-stats-image" id="about" aria-label="Texan Core Solutions nationwide support metrics">
        <img src="/texan-assets/stats-strip.png" alt="We support PI law firms across the nation. 10 plus years experience, 500 plus firms supported, 100 percent PI focused support, nationwide." />
      </section>

      <section className="texan-image-strip texan-services-image" id="services" aria-label="Pre-litigation and legal operations support services">
        <img src="/texan-assets/services-strip.png" alt="What we do: pre-litigation and legal operations support services." />
      </section>

      <section className="texan-image-strip texan-values-band" aria-label="Texan Core Values">
        <img src="/texan-assets/values-strip-clean.png" alt="Texan Core Values: hard work, loyalty, respect, accountability, experienced, committed, trusted." />
      </section>

      <section className="texan-image-strip texan-founders" aria-label="Meet your co-founders">
        <img src="/texan-assets/cofounders-strip.png" alt="Meet your co-founders: Richelle Bauman and Jacqueline Maldonado." />
      </section>

      <footer className="texan-footer">
        <div>
          <b>Texan Core Solutions</b>
          <span>Strategy. Growth. Guidance. Support.</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href={DEMO_EMAIL}>Schedule a Demo</a>
          <Link href="/login">Client/Firm Portal</Link>
        </nav>
      </footer>
    </main>
  );
}
