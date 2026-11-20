import ContactActions from './contact-actions';
import RevealEffects from './reveal-effects';
import SiteHeader from './site-header';
import WorkSection from './work-section';
import { inquiryHref } from './site';

const tickerItems = ['YouTube edits', 'Short form content', 'Brand stories', 'Creator content'];

const services = [
  ['YouTube & long form', 'Structure, pacing, captions, B-roll, and sound that help longer videos feel effortless to watch.'],
  ['Shorts & social', 'Fast, focused edits built around the moment that makes someone stop scrolling.'],
  ['Brand & promo', 'Clean visual storytelling that makes your message feel as good as it looks.'],
];

const steps = [
  ['01 / DISCOVER', 'Share the idea', 'Tell me the goal, the audience, the footage you have, and the feeling you want the video to leave behind.'],
  ['02 / CREATE', 'Shape the story', 'I build the edit around the strongest moments, with rhythm, sound, and details that serve the message.'],
  ['03 / REFINE', 'Make it yours', "We review the cut, fine-tune what matters, and get it ready for the platform where it belongs."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> VIDEO EDITOR FOR CREATORS & BRANDS</p>
              <h1 id="hero-title">Make every <em>second</em> count<span className="accent-dot">.</span></h1>
              <p className="hero-lead">I turn raw footage into videos with a clear story, a considered pace, and a reason to keep watching.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={inquiryHref}>
                  Let's work together <span className="button-icon" aria-hidden="true">+</span>
                </a>
                <a className="text-link" href="#work">Explore the portfolio</a>
              </div>
              <div className="hero-footnote"><span className="availability-dot" aria-hidden="true" /> Available for creator and client projects</div>
            </div>
            <div className="hero-visual" aria-label="Cinematic film clapperboard photograph">
              <img src="/assets/hero.jpg" alt="Film clapperboard held in a wide desert landscape" fetchPriority="high" />
              <div className="hero-visual-shade" />
              <div className="frame-corner frame-corner-top" aria-hidden="true" />
              <div className="frame-corner frame-corner-bottom" aria-hidden="true" />
              <div className="hero-visual-label"><span>THE STORY IS IN THE EDIT</span><span>VAIBHAV RAJPOOT</span></div>
            </div>
          </div>
          <div className="container hero-bottom"><span>STORY. RHYTHM. IMPACT.</span><span>SCROLL TO EXPLORE</span></div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <TickerItem key={index} text={item} />
            ))}
          </div>
        </div>

        <WorkSection />

        <section className="services section-pad" id="services" aria-labelledby="services-title">
          <div className="container services-grid">
            <div className="services-intro reveal">
              <p className="eyebrow"><span className="eyebrow-line" /> WHAT I CAN EDIT</p>
              <h2 id="services-title">Different formats. <em>One clear vision.</em></h2>
              <p>From the first hook to the final frame, every choice should support the story and the audience watching it.</p>
              <div className="services-signature" aria-hidden="true"><img src="/assets/logo-mark.svg" alt="" /><span>EDIT WITH INTENTION</span></div>
            </div>
            <div className="service-list">
              {services.map(([title, detail], index) => (
                <article className="service-item reveal" key={title}>
                  <span className="service-icon">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{detail}</p></div>
                  <span className="service-plus" aria-hidden="true">+</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-photo reveal">
              <img src="/assets/brand.jpg" alt="Camera equipment arranged on a dark surface" loading="lazy" />
              <div className="about-photo-caption"><span>CRAFTED FRAME BY FRAME</span><span>VAIBHAV / EDITOR</span></div>
            </div>
            <div className="about-copy reveal">
              <p className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> THE PERSON BEHIND THE CUT</p>
              <h2 id="about-title">Hi, I'm <em>Vaibhav.</em></h2>
              <p className="about-lead">I edit videos for creators and brands who want their ideas to land with clarity and energy.</p>
              <p>Good editing is more than cutting clips together. It means finding the story in the footage, knowing when to move quickly, and knowing when to let a moment breathe. That's the thinking I bring to every project.</p>
              <div className="about-tags"><span>Story-first edits</span><span>Platform-aware pacing</span><span>Thoughtful details</span></div>
              <a className="button button-dark" href={inquiryHref}>
                Tell me about your project <span className="button-icon" aria-hidden="true">+</span>
              </a>
            </div>
          </div>
        </section>

        <section className="process section-pad" aria-labelledby="process-title">
          <div className="container">
            <div className="process-head reveal">
              <p className="eyebrow"><span className="eyebrow-line" /> HOW WE WORK</p>
              <h2 id="process-title">Simple process. <em>Strong result.</em></h2>
            </div>
            <div className="process-grid">
              {steps.map(([label, title, description]) => (
                <article className="process-step reveal" key={label}>
                  <span className="step-count">{label}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner reveal">
            <p className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> HAVE SOMETHING IN MIND?</p>
            <h2 id="contact-title">Let's make <em>something worth watching.</em></h2>
            <p>Tell me about your video, your timeline, and what you want it to achieve. I'll take it from there.</p>
            <ContactActions />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#top" aria-label="Vaibhav Rajpoot, back to top">
            <span className="brand-icon" aria-hidden="true"><img src="/assets/logo-mark.svg" alt="" /></span>
            <span className="brand-name"><strong>Vaibhav Rajpoot</strong><span>VIDEO EDITOR</span></span>
          </a>
          <span>Video editor for creators & brands.</span>
          <a href="#top">Back to top</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Vaibhav Rajpoot</span>
          <span>Made for stories that stay with you.</span>
        </div>
      </footer>
      <RevealEffects />
    </>
  );
}

function TickerItem({ text }) {
  return <><span>{text.toUpperCase()}</span><b>✳</b></>;
}
