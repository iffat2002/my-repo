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
import features from "./assets/imgs/features.png";

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
      isLink: true,
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  // const [activeFilter, setActiveFilter] = useState("ALL");

  // // Process data
  // const groupedItems = feedData.filter((item) => item.group);
  // const normalItems = feedData.filter((item) => !item.group && !item.footer);
  // const footerItem = feedData.find((item) => item.footer);

  // // Filter functions
  // const filteredGroupedItems =
  //   activeFilter === "ALL"
  //     ? groupedItems
  //     : groupedItems.filter((item) => item.type.toUpperCase() === activeFilter);

  const [activeTab, setActiveTab] = useState(null); // null = show all

  const tabs = ["MEDIUM", "DEMOS", "COMMUNITY"];

  const filteredFeed = activeTab
    ? feedData.filter(
        (item) => item.type && item.type.toUpperCase() === activeTab
      )
    : feedData;

  //manifesto animation
  const wrapperRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 750) {
      const ctx = gsap.context(() => {
        gsap.to(".manifesto-item", {
          y: "-440px",
          delay: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            //  end: () => `+=700px`,
            pin: true,
            //   anticipatePin: 1,
            pinSpacing: false,
            scrub: true,
          },
        });
      }, wrapperRef);

      return () => ctx.revert();
    }
  }, []);

  //accordion animation
  const cardRefs = useRef([]);
  const headersRef = useRef([]);
  const accordionBodyRef = useRef();

  const boxRef = useRef(null);
  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  console.log(openIndex, "openIndex");

  useEffect(() => {
    const box = boxRef.current;
    const headers = headersRef.current;
    const body = accordionBodyRef.current;

    headers.forEach((el) => {
      if (el) gsap.set(el, { y: 0 });
    });

    if (openIndex === null || !headers[openIndex]) {
      gsap.to(box, { opacity: 0, duration: 0.3 });
      return;
    }

    const currentHeader = headers[openIndex];

    const top = currentHeader.offsetTop + currentHeader.offsetHeight;

    const otherHeadersBelow = headers.filter((el, i) => {
      if (!el || i === openIndex) return false;
      return el.offsetTop > currentHeader.offsetTop;
    });

    const boxHeight = box.scrollHeight || 100;
    const shiftAmount = boxHeight;

    gsap.to(box, {
      top,
      opacity: 1,
      duration: 0.6,

      ease: "power2.out",
    });

    otherHeadersBelow.forEach((el) => {
      gsap.to(el, {
        y: shiftAmount,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    const lastHeader =
      otherHeadersBelow[otherHeadersBelow.length - 1] || currentHeader;
    const lastY = lastHeader.offsetTop + lastHeader.offsetHeight;
    const estimatedBottom =
      lastY + (otherHeadersBelow.length > 0 ? shiftAmount : 0);

    gsap.to(body, {
      height: estimatedBottom,
      duration: 0,
    });
  }, [openIndex]);

  //images animation
  useEffect(() => {
    const isMobile = window.innerWidth <= 500;
    //move to right
    const cardsLeft = gsap.utils.toArray(".bottom .image, .m-left, .feed-main-content-item .image");
    cardsLeft.forEach((card, index) => {
      gsap.fromTo(
        card,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          delay: isMobile ? 0.8 : 1.3,
          ease: "power2.inOut",
          transformOrigin: "left",
          scrollTrigger: {
            trigger: card,
            start: isMobile ? "top 90%" : "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

     //move to left
    const cardsRight = gsap.utils.toArray(".top .image, .m-right, .feed-right");
    cardsRight.forEach((card, index) => {
      gsap.fromTo(
        card,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          delay: isMobile ? 1 : 1.3,
          ease: "power2.inOut",
          transformOrigin: "right",
          scrollTrigger: {
            trigger: card,
            start: isMobile ? "top 90%" :"top 90%" ,
            toggleActions: "play none none none",
          },
        }
      );
    });

    //hero text animation
    gsap.fromTo(
      ".hero h1, .hero h3",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.6,
        ease: "power2.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".hero",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      }
    );
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

                  <ScrambleText text="decentralized" />

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
              <div className="sticky-wrapper" ref={wrapperRef}>
                <div className="manifesto-grid">
                  <div className="m-left">
                    <img src={ManifestoLeft} alt="" />
                  </div>

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
                {/* applying inner scroll on this */}
                <div ref={tableRef} className="manifesto-table">
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
                <img src={features}  alt=""/>
                <div className="accordion" ref={accordionBodyRef}>
                  {accordionData.map((item, index) => (
                    <div
                      className={`accordion-item ${item.isLink && "link"}`}
                      key={index}
                      ref={(el) => (cardRefs.current[index] = el)}
                    >
                      {item.isLink ? (
                        <>
                          <h3
                            className="gray"
                            ref={(el) => (headersRef.current[index] = el)}
                          >
                            <ScrambleText text="BUILD WITH US" />
                            <Arrow />
                          </h3>
                        </>
                      ) : (
                        <h3
                          ref={(el) => (headersRef.current[index] = el)}
                          className={openIndex === index ? "" : "inactive"}
                          onClick={() => toggleItem(index)}
                        >
                          <ScrambleText text={item.title} />
                        </h3>
                      )}
                      {/* Floating content box */}

                      {/* <div className="show">
                        <p >
                          <ScrambleText text={item.content} />
                        </p>
                 </div> */}
                    </div>
                  ))}

                  <div className="content-box" ref={boxRef}>
                    {/* {openIndex === index && ( */}
                    <p>
                      <ScrambleText
                        key={openIndex}
                        text={accordionData[openIndex].content}
                      />
                    </p>
                    {/* )} */}
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
                <h2>
                  <ScrambleText text="Feed" />
                </h2>
              </div>
              <div className="feed-info-container">
                <div className="feed-column">
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      className={`feed-tab ${
                        activeTab === tab ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      <h4>
                        <ScrambleText text={tab} />
                      </h4>
                    </div>
                  ))}

                  <div className="feed-tab image">
                    <img src={FeedLeft} alt="Feed Left" />
                  </div>
                </div>

                <div className="feed-column">
                  {filteredFeed.map((item, index) => (
                    <div className="feed-info" key={index}>
                      {item.date && (
                        <h6>
                          {" "}
                          <ScrambleText text={item.date} />
                        </h6>
                      )}
                      <h3>
                        <ScrambleText text={item.title} />
                      </h3>
                      {item.type && (
                        <h6>
                          <ScrambleText text={item.type.toUpperCase()} />{" "}
                          <Arrow />
                        </h6>
                      )}
                    </div>
                  ))}
                </div>
                <div className="feed-column">
                  <div className="third-column-item first"></div>
                  <div className="third-column-item second"></div>
                  <div className="third-column-item third"></div>
                  <div className="third-column-item image">
                    <img src={FeedRight} alt="" />
                  </div>
                </div>
              </div>
              <div className="feed-footer">
                <div className="feed-tab">
                  <h4>
                    <ScrambleText text="SERTN - WE PROVIDE CERTAINTY FOR ON-CHAIN AI" />
                  </h4>
                </div>
                <div className="feed-info">
                  <h3>
                    <ScrambleText text="sertn" />{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
