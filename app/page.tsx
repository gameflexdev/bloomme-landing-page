import Image from "next/image";

const flowers = [
  ["👑", "Crown", "For leadership and greatness."],
  ["🌻", "Respect", "For character and admiration."],
  ["🌼", "Appreciation", "For everyday kindness."],
  ["🔥", "Legendary", "For unforgettable impact."],
  ["🌸", "Bloom", "For growth and support."],
];

const steps = [
  ["01", "Choose someone", "Pick a person who deserves recognition."],
  ["02", "Send a flower", "Choose the flower that matches the moment."],
  ["03", "Make their day", "Share appreciation publicly or privately."],
];

export default function Home() {
  return (
    <main className="page">
      <div className="glow glowOne" />
      <div className="glow glowTwo" />
      <div className="gridPattern" />

      <header className="nav">
        <div className="brand">
          <Image src="/bloomme-icon.png" alt="Bloomme icon" width={42} height={42} className="brandIcon" priority />
          <span>bloom<span>me</span></span>
        </div>
        <nav className="navLinks">
          <a href="#flowers">Flowers</a>
          <a href="#how">How it works</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
        <a className="navCta" href="#waitlist">Join Waitlist</a>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">A new kind of positive social app</p>
          <h1>Give people their <span>flowers.</span></h1>
          <p className="subhead">Bloomme is a social app built around appreciation, recognition, and meaningful connection.</p>
          <div className="heroActions">
            <a className="primaryBtn" href="#waitlist">Join the Waitlist</a>
            <a className="secondaryBtn" href="#how">See how it works</a>
          </div>
          <div className="miniStats">
            <div><strong>Public</strong><small>or private flowers</small></div>
            <div><strong>5</strong><small>flower types</small></div>
            <div><strong>Wall</strong><small>of recognition</small></div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="iconHalo">
            <Image src="/bloomme-icon.png" alt="Bloomme logo" width={360} height={360} className="mainIcon" priority />
          </div>
          <div className="floatingCard cardOne">
            <span>🔥 Legendary Flower</span>
            <p>“You showed up when it mattered most.”</p>
          </div>
          <div className="floatingCard cardTwo">
            <span>🌻 Respect Flower</span>
            <p>Abraham → Elena</p>
          </div>
        </div>
      </section>

      <section id="flowers" className="section">
        <p className="sectionLabel">Flower system</p>
        <h2>Choose the right flower for the moment.</h2>
        <div className="flowerGrid">
          {flowers.map(([emoji, title, text]) => (
            <div className="flowerCard" key={title}>
              <div className="emoji">{emoji}</div>
              <h3>{title} Flower</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="section split">
        <div>
          <p className="sectionLabel">How Bloomme works</p>
          <h2>Turn appreciation into something people can feel.</h2>
          <p className="sectionText">Send beautiful digital flowers with heartfelt messages. They can live on a profile wall, show up in the community feed, or stay private.</p>
        </div>
        <div className="steps">
          {steps.map(([num, title, text]) => (
            <div className="step" key={num}>
              <span>{num}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="profileSection">
        <div className="profileCopy">
          <p className="sectionLabel">Your profile. Your impact.</p>
          <h2>Build your wall of appreciation.</h2>
          <p>Every flower you receive becomes part of a positive record of who you are and how people experience you.</p>
        </div>
        <div className="profileCard">
          <div className="avatar">AS</div>
          <h3>Abraham Smith</h3>
          <p>@abrahamsmith</p>
          <div className="profileStats">
            <div><strong>428</strong><small>Sent</small></div>
            <div><strong>1.2K</strong><small>Received</small></div>
            <div><strong>#12</strong><small>Rank</small></div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="waitlist">
        <Image src="/bloomme-icon.png" alt="Bloomme icon" width={100} height={100} className="waitIcon" />
        <h2>Kindness looks good on you.</h2>
        <p>Join the Bloomme waitlist and be first to experience a more positive social platform.</p>
        <form className="waitForm">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Join Waitlist</button>
        </form>
      </section>

      <footer>
        <div className="brand small">
          <Image src="/bloomme-icon.png" alt="Bloomme icon" width={32} height={32} className="brandIcon" />
          <span>bloom<span>me</span></span>
        </div>
        <p>© 2026 Bloomme. Give people their flowers.</p>
      </footer>
    </main>
  );
}
