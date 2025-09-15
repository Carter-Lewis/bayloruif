import React from 'react'
import styles from './About.module.css'
import AboutCard from './AboutCard/AboutCard.jsx'
import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
    <div className={styles.aboutWrapper} id='about'>
        <AboutCard 
          title="Who we are" 
          side='left' 
          content='We are students dedicated to seeing positive, student-driven change on Baylor Campus.'></AboutCard>
        <AboutCard 
          title='What we do' 
          side='right' 
          content='We collaborate with various campus partners to identify areas of improvement and implement innovative solutions.' />
    </div>
    </>
  )
}

export default About