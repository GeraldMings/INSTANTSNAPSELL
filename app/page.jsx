import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">GEESTABLISH</div>
        <Link href="/app" className="navButton">
          Open SnapSell™
        </Link>
      </nav>

      <section className="hero">
        <div className="eyebrow">BY GEESTABLISH</div>

        <h1>
          Turn Any Product Into a
          <span> Sales System.</span>
        </h1>

        <p className="heroText">
          SnapSell™ is an AI-powered sales command center that helps you
          transform a product into positioning, content, WhatsApp
          conversations, follow-ups and a practical sales strategy.
        </p>

  
        
            

          <a
  href="https://paystack.com/buy/snapsell--ai-sales-command-center-nultnw"
  className="primaryButton"
  target="_blank"
  rel="noopener noreferrer"
>
  Get SnapSell™ — $18 →
</a>

          <a href="#how" className="secondaryButton">
            See How It Works
          </a>
        </div>

        <p className="smallText">
          SNAP → ANALYZE → POSITION → CREATE → CONVERSE → CLOSE → IMPROVE
        </p>
      </section>

      <section className="section" id="how">
        <div className="sectionLabel">THE ENGINE</div>
        <h2>One product. One intelligent sales system.</h2>

        <div className="steps">
          <div>
            <b>01 — SNAP</b>
            <p>Give SnapSell™ the information about your product.</p>
          </div>

          <div>
            <b>02 — ANALYZE</b>
            <p>Understand your customer, their problem and their desire.</p>
          </div>

          <div>
            <b>03 — POSITION</b>
            <p>Find stronger ways to present your offer.</p>
          </div>

          <div>
            <b>04 — CREATE</b>
            <p>Generate hooks, posts, CTAs and sales content.</p>
          </div>

          <div>
            <b>05 — CONVERSE</b>
            <p>Build natural sales conversations and objection responses.</p>
          </div>

          <div>
            <b>06 — CLOSE</b>
            <p>Create practical closing and follow-up sequences.</p>
          </div>

          <div>
            <b>07 — IMPROVE</b>
            <p>Track what matters and continuously improve your selling.</p>
          </div>
        </div>
      </section>

      <section className="darkSection">
        <div className="sectionLabel">WHAT YOU CAN CREATE</div>
        <h2>More than content generation.</h2>

        <div className="featureGrid">
          <div className="feature">AI Product Analysis</div>
          <div className="feature">Sales Positioning</div>
          <div className="feature">Sales Hooks</div>
          <div className="feature">Social Media Content</div>
          <div className="feature">WhatsApp Sales Scripts</div>
          <div className="feature">Objection Responses</div>
          <div className="feature">Follow-Up Sequences</div>
          <div className="feature">Sales Action Plans</div>
        </div>
      </section>

      <section className="section">
        <div className="sectionLabel">BUILT FOR SELLERS</div>
        <h2>Made for people who actually have something to sell.</h2>

        <div className="audience">
          <p>✓ Digital product creators</p>
          <p>✓ Online sellers</p>
          <p>✓ Entrepreneurs</p>
          <p>✓ Coaches and service providers</p>
          <p>✓ Social-media sellers</p>
          <p>✓ WhatsApp businesses</p>
        </div>
      </section>

      <section className="offer">
        <div className="sectionLabel">SNAPSELL™ BY GEESTABLISH</div>

        <h2>Stop wondering what to post, say or sell next.</h2>

        <p>
          Put your product into SnapSell™ and turn your ideas into a
          structured sales system you can actually execute.
        </p>

        <Link href="/app" className="primaryButton">
          Enter SnapSell™ →
        </Link>
      </section>

      <section className="faq">
        <div className="sectionLabel">FAQ</div>

        <h2>Questions?</h2>

        <div className="faqItem">
          <b>What is SnapSell™?</b>
          <p>
            SnapSell™ is an AI-powered sales command center created by
            Geestablish to help sellers develop practical sales strategies
            and marketing assets from their product information.
          </p>
        </div>

        <div className="faqItem">
          <b>Does SnapSell™ guarantee sales?</b>
          <p>
            No. SnapSell™ provides strategies and content. Results depend
            on the product, market, execution and many other factors.
          </p>
        </div>

        <div className="faqItem">
          <b>Can I use it for different products?</b>
          <p>
            Yes. You can use the system to develop sales strategies for
            different products, services and offers.
          </p>
        </div>
      </section>

      <footer>
        <strong>SNAPSELL™</strong>
        <span>AI Sales Command Center</span>
        <span>Created by Geestablish</span>
    
        <span>
  Customer Support:{" "}
  <a href="mailto:geemingle15@gmail.com">geemingle15@gmail.com</a>
</span>
<span>
  <a href="mailto:geestablish@gmail.com">geestablish@gmail.com</a>
</span>
<span>
  <a href="tel:+233534671381">+233 534 671 381</a>
</span>
</footer>
      
  </main>
  );
            }
