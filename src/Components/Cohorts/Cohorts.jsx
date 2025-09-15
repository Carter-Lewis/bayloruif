import React from "react";
import styles from "./Cohorts.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import CohortCard from "./CohortCard";
import { cohortOneMembers } from '../../../Constants/constants'

const Cohorts = () => {
  useGSAP(() => {
    gsap.from("#cohorts-title", {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#cohorts-title",
        start: "bottom bottom",
        end: "center 25%",
        scrub: true,
      },
    });
  });

  return (
    <div className={styles.cohortsWrapper} id="cohorts">
      <h1 className={styles.cohortsTitle} id="cohorts-title">
        Cohorts
      </h1>
      <div className={styles.cohortsCardsWrapper}>
        <CohortCard title="Cohort Zero" intro='Baylor&apos;s first cohort of University Innovation Fellows' cohort={cohortOneMembers}>

        </CohortCard>
      </div>
    </div>
  );
};

export default Cohorts;
