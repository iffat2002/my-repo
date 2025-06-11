import "./App.css";
import Arrow from "./assets/svgs/Arrow";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import Marquee from "react-fast-marquee";
import feedData from "./data/feedData.json";
import HeroImg from "./assets/imgs/HeroImg.png";
import HeroBottom from "./assets/imgs/HeroBottom.png";
import ManifestoLeft from "./assets/imgs/ManifestoLeft.png";
import ManifestoRight from "./assets/imgs/ManifestoRight.png";
import FeedLeft from "./assets/imgs/FeedLeft.png";
import FeedRight from "./assets/imgs/FeedRight.png";
import CompanyLogo1 from "./assets/imgs/CompanyLogo1.png";
import CompanyLogo2 from "./assets/imgs/CompanyLogo2.png";
import CompanyLogo3 from "./assets/imgs/CompanyLogo3.png";
import CompanyLogo4 from "./assets/imgs/CompanyLogo4.png";
import CompanyLogo5 from "./assets/imgs/CompanyLogo5.png";

import ScrambleText from "./components/ScrambleText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const marqueeContent = [
    { text: "SERTN AVS DEPLOYED TO EIGENLAYER TESTINET", link: "#" },
    { text: "TAKE ME THERE", icon: <Arrow />, link: "#" },
    { text: "OMRON - BITTENSOR SUBNET 2 IS LIVE ON MAINNET", link: "#" },
    { text: "OMRON AI", icon: <Arrow />, link: "#" },
    { text: "SERTN AVS DEPLOYED TO EIGENLAYER TESTINET", link: "#" },
    { text: "TAKE ME THERE", icon: <Arrow />, link: "#" },
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

  const accordionData = [
    {
      title: "Agentic Native Protocols",
      content:
        "Agents require a different set of tools at their disposal. They can't rely on trust nor determine counterparty risk without all the facts. Instead, Agents will use protocols to ensure interoperability, model authenticity, and computational integrity.",
    },
    {
      title: "DATA-BACKED EXPERIENCES",
      content:
        "Provide peace of mind in our user experiences with verifiable data-backed function calls. Imagine using unverified smart contracts, with expectations and guarantees as an afterthought. No need to trust a black box when you see the math yourself.",
    },
    {
      title: "INTEROPERABLE INTELLIGENCE",
      content:
        "With a system integrated into existing AI protocols, the power of AI verification is in your hands. Build cross chain applications to execute AI workflows with guarantees of atomic operations.",
    },
    {
      title: "ETHICAL ADVANCEMENTS",
      content:
        "What's out of sight is actually top of mind. Responsible AI faces a myriad of challenges, from securing patient and client data to ensuring explainability in AI inference. Empower those affected by AI predictions to challenge or alter future outcomes using technologies such as Zero-Knowledge Machine Learning (zkML) and Fully Homomorphic Encryption (FHE).",
    },
    {
      title: "INFERENCE COMMERCE PROTOCOLS",
      content:
        "Sertn makes it possible for projects, data scientists, and developers to easily deploy next-gen proprietary models without compromises or customer trust assumptions.",
    },
    {
      title: "BUILD WITH US",
      content: "",
      isLink: true
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const groupedItems = feedData.filter((item) => item.group);
  const normalItems = feedData.filter((item) => !item.group && !item.footer);
  const footerItem = feedData.find((item) => item.footer);


  //manifesto animation
 const gridRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
 let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top top",
        end: "bottom+=100% top",
        scrub: true,
        pin: true,
        markers: true,
        // pinSpacer:false,
        pinSpacing:false,
      },
    });

    tl.fromTo(
      tableRef.current,
      { y: "0%" },
      { y: "-60%", ease: "none" }
    );
  });

  return () => ctx.revert();
  }, []);


  return (
    <div className="sertn-ai">
      <main>
        <Header />
        <section className="hero">
          <div className="box">
            <div className="hero-content">
              <div className="top">
                <h1>
                  <ScrambleText text="AI hyperscale on" />
                  {/* <br /> */}
                  <ScrambleText text="decentralized" />
                  {/* <br /> */}
                  <ScrambleText text="networks" />
                </h1>
                <div className="image">
                  <img src={HeroImg} alt="hero" />
                </div>
              </div>
              <div className="bottom">
                <div className="image">
                  <img src={HeroBottom} alt="" />
                </div>
                <div className="right-content">
                  <h3 className="h-bottom-text">
                    <ScrambleText text="WE PROVIDE CERTAINTY FOR ON-CHAIN AI" />
                  </h3>
                  <div className="h-bottom-code">
                    <div className="code">
                      <span>
                        {" "}
                        <ScrambleText text="JB 572046741" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="marquee-section">
          <div className="box">
            <div className="marquee-tag">
              <Marquee gradient={false} speed={200}>
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
                <h2>
                  <ScrambleText text="Manifesto" />
                </h2>
              </div>
              <div className="manifesto-grid">
                <div className="m-left">
                  <img src={ManifestoLeft} alt="" />
                </div>
              <div className="manifesto-grid"  ref={gridRef}>
                <div className="m-left"></div>
                <div className="m-center">
                  <p>
                    <ScrambleText text="We believe in a future were AI is sovereign by default and governed by cryptographic certainty over centralized authorities." />
                  </p>
                  <p>
                    <ScrambleText text="Where new economies are decentralized by design and computation integrity is native to protocols." />
                  </p>
                </div>
                <div className="m-right">
                  <img src={ManifestoRight} alt="" />
                </div>
              </div>
              <div    className="sticky-wrapper">
              <div ref={tableRef}  className="manifesto-table">
                {manifesto.map((item) => (
                  <div key={item.id} className="manifesto-item">
                    <div className="left-column">
                      <span className="item-number">
                        <ScrambleText text={item.id} />
                      </span>
                      <h2 className="item-title">
                        <ScrambleText text={item.title} />
                      </h2>
                    </div>

                    <div className="right-column">
                      <p>
                        <ScrambleText text={item.description} />{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="marquee-section">
          <div className="box">
            <div className="marquee-tag">
              <Marquee gradient={false} speed={200}>
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
                          {item.isLink && (
                            <span>
                              <Arrow />
                            </span>
                          )}
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
                <h2>
                  <ScrambleText text="Features" />
                </h2>
                <div className="line"></div>
                <div className="line"></div>
              </div>

              <div className="features-main-container">
                <div className="accordion">
                  {accordionData.map((item, index) => (
                
                    <div className="accordion-item" key={index}>
                      {item.isLink ? (    
                    <h3 className="gray">
                      <ScrambleText text="BUILD WITH US"/>
                      <Arrow />
                    </h3>
                ) : (   <h3
                        className={openIndex === index ? "" : "inactive"}
                        onClick={() => toggleItem(index)}
                 
                      >
                          <ScrambleText text={item.title} />
                       
                      </h3>)}
                   
                      {item.content && (
                        <p
                          className={
                            openIndex === index
                              ? "show"
                              : ""
                          }
                        >
                          <ScrambleText text={item.content} />
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-section">
          <div className="box">
            <div className="marquee-tag">
              <Marquee gradient={false} speed={200}>
                <div className="logo-container">
                  <div className="logo">
                    <img src={CompanyLogo1} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo2} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo3} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo4} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo5} alt="" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="logo">
                    <img src={CompanyLogo1} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo2} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo3} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo4} alt="" />
                  </div>
                  </div>
                  <div className="info">
                    <h6><ScrambleText text={item.date} /></h6>
                    <h3><ScrambleText text={item.title} /></h3>
                    <h6>
                      <ScrambleText text={item.type} /> <Arrow />
                    </h6>
                  <div className="logo">
                    <img src={CompanyLogo5} alt="" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="logo">
                    <img src={CompanyLogo1} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo2} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo3} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo4} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo5} alt="" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="logo">
                    <img src={CompanyLogo1} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo2} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo3} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo4} alt="" />
                  </div>
                  <div className="logo">
                    <img src={CompanyLogo5} alt="" />
                  </div>
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
                <div className="tab image">
                  <img src={FeedLeft} alt="" />
                </div>
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
                <div className="feed-right">
                  <img src={FeedRight} alt="" />
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
