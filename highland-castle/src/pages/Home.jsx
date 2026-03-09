import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="room-number">Est. 1824</span>
        <h1>Highland Castle Estate</h1>
        <hr className="gold-line" />
        <p>
          Nestled in the heart of the Scottish Highlands, Highland Castle 
          offers a sanctuary of historic charm and modern luxury.
        </p>

        <div className="cta-container">
          <Link to="/suites" className="btn-explore">
            <span>Explore Suites</span>
            <div className="btn-border"></div>
            </Link>
        </div>
      </div>
      
      <div className="hero-image">
         <img src="/images/castle.png" alt="Highland Castle Exterior" style={{width: '100%', border: '1.5px solid var(--antique-gold)'}} />
      </div>

    </section>
  );
}