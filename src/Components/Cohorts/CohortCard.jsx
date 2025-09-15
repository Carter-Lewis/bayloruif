import React from "react";
import styles from "./CohortCard.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import MemberCard from "./MemberCard";

const CohortCard = (props) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleVideoToggle = (memberId) => {
    // If the same video is clicked, close it. Otherwise, open the new one and close others
    setActiveVideoId(activeVideoId === memberId ? null : memberId);
  };

return (
    <>
        <div className={styles.cohortCard}>
            <h2 className={styles.cohortTitle}>{props.title}</h2>
            <p className={styles.cohortIntro}>{props.intro}</p>
            <div className={styles.memberImageWrapper}>
                {props.cohort.map((member) => (
                    <MemberCard 
                        key={member.id} 
                        title={member.name} 
                        image={member.image} 
                        video={member.video}
                        isVideoOpen={activeVideoId === member.id}
                        onVideoToggle={() => handleVideoToggle(member.id)}
                    />
                ))}
            </div>
        </div>
    </>
);
};

export default CohortCard;
