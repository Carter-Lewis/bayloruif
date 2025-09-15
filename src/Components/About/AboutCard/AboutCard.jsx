import React, { useRef } from 'react'
import styles from './AboutCard.module.css'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const AboutCard = (props) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      xPercent: props.side === 'left' ? -150 : 150,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 60%',
        end: 'center center',
        scrub: true
      }
    })
  }, [props.side]);

  return (
    <div className={styles.aboutCard} ref={cardRef}>
      {props.side==='left'?<><h1 className={styles.cardTitle}>{props.title}</h1>
        <p className={styles.cardContent}>{props.content}</p></>
        :
        <><p className={styles.cardContent}>{props.content}</p>
        <h1 className={styles.cardTitle}>{props.title}</h1>
        </>}
        
    </div>
  )
}

export default AboutCard