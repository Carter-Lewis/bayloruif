import styles from "./Hero.module.css";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const heroSplit = new SplitText("#hero-title", { type: "chars, words" });
    const paraSplit = new SplitText("#hero-subtitle", { type: "lines" });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.from("#scroll-prompt", {
      opacity: 0,
      duration: 0.5,
      ease: "power1.in",
      delay: 2.25,
    });

    gsap.to("#hero-title", {
      scale: 5,
      opacity: 0,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#hero-title",
        start: "bottom 55%",
        end: "center top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to("#hero-subtitle", {
      scale: 5,
      opacity: 0,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#hero-subtitle",
        start: "center 57%",
        end: "center top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to("#scroll-prompt", {
      y: "2vh",
      ease: "power1.in",
      yoyo: true,
      repeat: -1,
    });

    gsap.to("#scroll-prompt", {
      opacity: 0,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#hero-subtitle",
        start: "center 57%",
        end: "center top",
        scrub: true,
      },
    });
  });

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle} id="hero-title">
          Baylor UIF
        </h1>
        <p className={styles.heroSubtitle} id="hero-subtitle">
          Cultivating a culture of entrepreneurship
          <br /> and innovation excellence.
        </p>
        <FontAwesomeIcon
          icon={faArrowDown}
          className={styles.heroSubtitle}
          id="scroll-prompt"
        />
      </div>
    </section>
  );
};

export default Hero;
