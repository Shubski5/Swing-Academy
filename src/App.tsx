import React from 'react';
import './style.css';
import Reviews from './components/Reviews';

const scrollToPayment = () => {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
        paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const App: React.FC = () => {
    // Smooth scroll for anchor links
    // Updated deployment - 2024
    React.useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="main-container">
            {/* Logo at the very top */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3.5rem', marginBottom: '2.5rem' }}>
                <img src="logo.png" alt="Swing Academy Logo" style={{ width: 160, objectFit: 'contain', background: '#222', borderRadius: 24, padding: 12, boxShadow: '0 4px 24px rgba(229,57,53,0.10)' }} onError={e => (e.currentTarget.style.display = 'none')} />
            </div>
            <header className="card-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 0, marginBottom: '2.5rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
                <h1>Master Trading Skills for a Lifetime of Financial Growth</h1>
                <p style={{ color: '#fff', fontSize: '1.3rem', maxWidth: 700, textAlign: 'center', marginBottom: 32, marginTop: 0 }}>
                    Learn to trade confidently without needing a huge starting balance, endless hours at the screen, or any prior experience. Our mentorship guides you every step of the way.
                </p>
                <button className="header-btn" onClick={scrollToPayment}>
                    Join Now
                </button>
            </header>
            {/* Reviews Section - moved to top */}
            <section className="card-section" style={{ maxWidth: 900, textAlign: 'center', marginTop: 0, marginBottom: '2.5rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
                <h2>What Our Members Say</h2>
                <Reviews />
            </section>
            {/* What's Included Section */}
            <section className="card-section" style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center', alignItems: 'flex-start', marginTop: 0, marginBottom: '2.5rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
                <div style={{ flex: 1, minWidth: 320 }}>
                    <h2>What's Included?</h2>
                    <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: 24 }}>
                        Inside our private community, you'll get all the tools and step-by-step guidance to become a consistently profitable trader. We cover everything from setting up your broker to advanced strategies, so you can trade stocks and options with confidence.
                    </p>
                </div>
                <ul className="whats-included-list" style={{ flex: 2, minWidth: 320 }}>
                    <li><span>✔️</span> Step-by-step broker and chart setup for desktop & mobile</li>
                    <li><span>✔️</span> How to read market conditions and adapt your strategy</li>
                    <li><span>✔️</span> Identifying high-quality setups that win more often</li>
                    <li><span>✔️</span> Finding the next big winning stocks before they move</li>
                    <li><span>✔️</span> Spotting strength in stocks for bigger profits</li>
                    <li><span>✔️</span> Calculating position size & managing risk like a pro</li>
                    <li><span>✔️</span> Knowing exactly when to enter, take partials, and secure full profits</li>
                </ul>
            </section>
            {/* Payment Section */}
            <section id="payment-section" className="card-section" style={{ maxWidth: 540, textAlign: 'center', marginTop: 0, marginBottom: '2.5rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
                <h2>Join the Mentorship</h2>
                <div className="price-section">
                    <span className="old-price">$1000</span>
                    <span className="new-price">$750</span>
                    <span className="price-label">/lifetime</span>
                </div>
                <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: 24 }}>
                    Unlock all live sessions, the full video library, private community access, and direct feedback from experienced traders.
                </p>
                <a
                    href="https://whop.com/checkout/plan_JxIi1oDiB8GiS?d2c=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-btn"
                    style={{ display: 'inline-block', marginBottom: 16, textDecoration: 'none', textAlign: 'center' }}
                >
                    Checkout
                </a>
                <div style={{ color: '#888', fontSize: '0.95rem', marginTop: 8 }}>
                    Secure checkout & instant access after payment integration.
                </div>
                <div style={{ borderTop: '1px solid #222', margin: '2rem 0 0.5rem 0', paddingTop: 16, color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>
                    Mentorship Includes:
                </div>
                <ul className="whats-included-list" style={{ color: '#ccc', textAlign: 'left', maxWidth: 400, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
                    <li><span>✔️</span> Real-time trading sessions and Q&A</li>
                    <li><span>✔️</span> Full access to all educational videos</li>
                    <li><span>✔️</span> Private members-only chat group</li>
                    <li><span>✔️</span> Personalized trade reviews and feedback</li>
                    <li><span>✔️</span> Ongoing support from experienced mentors</li>
                </ul>
            </section>
            <footer style={{ textAlign: 'center', padding: '2.5rem 0 2rem 0', background: 'transparent', marginTop: 'auto' }}>
                <div style={{ marginBottom: 12, color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>Connect with us:</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
                    <a href="https://www.instagram.com/marktmade/" target="_blank" rel="noopener noreferrer" style={{ color: '#e53935', fontSize: 28, textDecoration: 'none' }} aria-label="Instagram">
                        <span role="img" aria-label="Instagram">📸</span>
                    </a>
                    <a href="https://www.youtube.com/@shxbtrades" target="_blank" rel="noopener noreferrer" style={{ color: '#e53935', fontSize: 28, textDecoration: 'none' }} aria-label="YouTube">
                        <span role="img" aria-label="YouTube">▶️</span>
                    </a>
                </div>
                <div style={{ color: '#888', fontSize: '0.95rem', marginTop: 16 }}>
                    &copy; {new Date().getFullYear()} Swing Academy. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default App; 