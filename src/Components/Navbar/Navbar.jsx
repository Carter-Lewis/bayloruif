import React from 'react'
import { navlinks } from '../../../Constants/constants'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navContainer}>
            <a href="home" className={styles.logo}>
              <img 
                src="/Images/white-uif-logo.png" 
                alt="Baylor UIF" 
                className={styles.logoImage}
              />
            </a>

            <ul className={styles.navList}>
                {navlinks.map((link) => (
                    <li key={link.id} className={styles.navItem}>
                        <a href={`#${link.id}`} className={styles.navLink}>
                          {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar