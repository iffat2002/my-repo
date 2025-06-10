import "./App.css";
import Header from "./components/Header";
import Marquee from "react-fast-marquee";
function App() {
  const marqueeContent = [
    { text: "SERTN AVS DEPLOYED TO EIGENLAYER TESTINET", link: "#" },
    { text: "TAKE ME THERE", icon: "→", link: "#" },
    { text: "OMRON - BITTENSOR SUBNET 2 IS LIVE ON MAINNET", link: "#" },
    { text: "OMRON AI", icon: "→", link: "#" },
    { text: "SERTN AVS DEPLOYED TO EIGENLAYER TESTINET", link: "#" },
    { text: "TAKE ME THERE", icon: "→", link: "#" },
  ];

  const manifesto = [
    {
      id: "01",
      title: "DECENTRALIZED AI, OWNED BY ALL",
      description:
        "With cutting-edge distributed networks to empower a transparent and secure environment where AI can thrive, foster participation and accelerate growth.",
    },
    {
      id: "02",
      title: "MATHEMATICALLY VERIFIABLE PROOFS",
      description:
        "State-of-the-art cryptographic verification guarantees computational integrity for sophisticated machine learning algorithms — rely on mathematics over magic or trust.",
    },
    {
      id: "03",
      title: "OPEN-SOURCE PROTOCOLS, GAME THEORY",
      description:
        "Promote a market-driven approach for governance of AI vs Centralized Authorities. A self regulating network effect of verifiable intelligence.",
    },
    {
      id: "04",
      title: "MACHINE - MADE, HUMAN - CENTERED",
      description:
        "The ultimate partnership. Distilled human intelligence with the observability and reliability of turing machines - Code is law.",
    },
  ];

  const marquee02 = [
    {
      text: "NODES",
      value: "210",
    },
    {
      text: "BLOCKS",
      value: "132350",
    },
    {
      text: "MARKET CAP",
      value: "$102.5",
    },
    {
      text: "TRANSACTION COUNT",
      value: "47000",
    },
    {
      text: "SERTN NETWORK IS LIVE",
      value: null,
      isLink: true,
    },
    {
      text: "MARKET CAP",
      value: "$102.5",
    },
    {
      text: "TRANSACTION COUNT",
      value: "47000",
    },
    {
      text: "SERTN NETWORK IS LIVE",
      value: null,
      isLink: true,
    },
    {
      text: "MARKET CAP",
      value: "$102.5",
    },
  ];
  return (
    <div className="sertn-ai">
      <main>
        <Header />
        <section className="hero">
          <div className="box">
            <div className="hero-content">
              <div className="top">
                <h1>AI hyperscale on decentralized networks</h1>
                <div className="image"></div>
              </div>
              <div className="bottom">
                <div className="image"></div>
                <div className="right-content">
                  <h3 className="h-bottom-text">
                    WE PROVIDE CERTAINTY FOR ON-CHAIN AI{" "}
                  </h3>
                  <div className="h-bottom-code">
                    <span>JB 572046741</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="marquee-section">
          <div className="box">
            <div className="marquee-tag">
              <Marquee gradient={false} speed={40}>
                {marqueeContent.map((item, index) => (
                  <div key={index}>
                    <div className={`tag ${index % 2 === 0 ? "gray-tag" : ""}`}>
                      {item.link ? (
                        <a href={item.link}>
                          {item.text}
                          {item.icon && <span>{item.icon}</span>}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        <section className="manifesto">
          <div className="box">
            <div className="manifesto-content">
              <div className="manifesto-head">
                <h2>Manifesto</h2>
              </div>
              <div className="manifesto-grid">
                <div className="m-left"></div>
                <div className="m-center">
                  <p>
                    We believe in a future were AI is sovereign by default and
                    governed by cryptographic certainty over centralized
                    authorities.
                  </p>
                  <p>
                    Where new economies are decentralized by design and
                    computation integrity is native to protocols.
                  </p>
                </div>
                <div className="m-right"></div>
              </div>
              <div className="manifesto-table">
                {manifesto.map((item, index) => (
                  <div key={item.id} className="manifesto-item">
                    <div className="left-column">
                      <span className="item-number">{item.id}</span>
                      <h2 className="item-title">{item.title}</h2>
                    </div>
                    {/* Right Column: Contains the description */}
                    <div className="right-column">
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-section">
          <div className="box">
            <div className="marquee-tag">
              <Marquee gradient={false} speed={40}>
                {marquee02.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`tag marquee02 ${
                        item.isLink ? "gray-tag" : ""
                      }`}
                    >
                      {item ? (
                        <a href={item.link}>
                          {item.text}
                          <span>{item.value}</span>
                          {item.isLink && <span>→</span>}
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="box">
            <div className="features-content">
              <div className="features-head">
                <h2>Features</h2>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
