
import React from 'react'
import { motion } from 'framer-motion';
import styles from './MemberCard.module.css'

const MemberCard = (props) => {

return (
    <motion.div layout className={styles.memberCard}>
        <motion.h2 className={styles.memberTitle}>{props.title}</motion.h2>
        {!props.isVideoOpen && (
            <motion.img
                onClick={props.onVideoToggle}
                src={props.image}
                alt="UIF is cool"
                className={styles.memberImage}
            />
        )}
        {props.isVideoOpen && (
            <video
                onClick={props.onVideoToggle}
                src={props.video}
                autoPlay
                controls={false}
                playsInline
                preload="auto"
                className={styles.memberVideo}
            />
        )}
    </motion.div>
)
}

export default MemberCard