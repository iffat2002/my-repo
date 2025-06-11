import "./App.css";
import Arrow from "./assets/svgs/Arrow";
import Header from "./components/Header";
import Marquee from "react-fast-marquee";
import feedData from "./data/feedData.json";
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

  const groupedItems = feedData.filter((item) => item.group);
  const normalItems = feedData.filter((item) => !item.group && !item.footer);
  const footerItem = feedData.find((item) => item.footer);

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
                {manifesto.map((item) => (
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
              <div className="features-main-container">
                <div className="accordion">
                  <div className="accordion-item">
                    <h3>Agentic Native Protocols</h3>
                    <p>
                      Agents require a different set of tools at their disposal.
                      They can't rely on trust nor determine counterparty risk
                      without all the facts. Instead, Agents will use protocols
                      to ensure interoperability, model authenticity, and
                      computational integrity.
                    </p>
                  </div>
                  <div className="accordion-item">
                    <h3 className="inactive">DATA-BACKED EXPERIENCES</h3>
                    <p className="hide">
                      Provide peace of mind in our user experiences with
                      verifiable data-backed function calls. Imagine using
                      unverified smart contracts, with expectations and
                      guarantees as an afterthought. No need to trust a black
                      box when you see the math yourself.
                    </p>
                  </div>
                  <div className="accordion-item">
                    <h3 className="inactive">
                      Agentic Native PrINTEROPERABLE INTELLIGENCEotocols
                    </h3>
                    <p className="hide">
                      With a system integrated into existing AI protocols, the
                      power of AI verification is in your hands. Build cross
                      chain applications to execute AI workflows with guarantees
                      of atomic operations.
                    </p>
                  </div>
                  <div className="accordion-item">
                    <h3 className="inactive">ETHICAL ADVANCEMENTS</h3>
                    <p className="hide">
                      What's out of sight is actually top of mind. Responsible
                      AI faces a myriad of challenges, from securing patient and
                      client data to ensuring explainability in AI inference.
                      Empower those affected by AI predictions to challenge or
                      alter future outcomes using technologies such as
                      Zero-Knowledge Machine Learning (zkML) and Fully
                      Homomorphic Encryption (FHE).
                    </p>
                  </div>
                  <div className="accordion-item">
                    <h3 className="inactive">INFERENCE COMMERCE PROTOCOLS</h3>
                    <p className="hide">
                      Sertn makes it possible for projects, data scientists, and
                      developers to easily deploy next-gen proprietary models
                      without compromises or customer trust assumptions.
                    </p>
                  </div>
                  <div className="accordion-item">
                    <h3 className="gray">
                      BUILD WITH US <Arrow />
                    </h3>
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
                <div className="logo-container">
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                </div>
                <div className="logo-container">
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                </div>
              </Marquee>
            </div>
          </div>
        </section>

        <section className="feed">
          <div className="box">
            <div className="feed-content">
              <div className="feed-head">
                <h2>Feed</h2>
              </div>

              {normalItems.map((item, index) => (
                <div className="feed-main-content-item" key={index}>
                  <div className="tab">
                    <h4>{item.type}</h4>
                  </div>
                  <div className="info">
                    <h6>{item.date}</h6>
                    <h3>{item.title}</h3>
                    <h6>
                      {item.type} <Arrow />
                    </h6>
                  </div>
                </div>
              ))}

              <div className="feed-main-content-item">
                <div className="tab image"></div>
                <div className="wrapper">
                  {groupedItems.map((item, index) => (
                    <div className="wrapper-content" key={index}>
                      <h6>{item.date}</h6>
                      <h3>{item.title}</h3>
                      <h6>
                        {item.type} <Arrow />
                      </h6>
                    </div>
                  ))}
                </div>
              </div>

              {footerItem && (
                <div className="feed-main-content-item bottom">
                  <div className="tab">
                    <h4>SERTN - WE PROVIDE CERTAINTY FOR ON-CHAIN AI</h4>
                  </div>
                  <div className="info">
                    <h3>{footerItem.title}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
