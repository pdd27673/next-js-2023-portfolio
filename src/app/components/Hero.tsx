import React from 'react'
import profilePic from '../../../public/images/hero-profile.jpg'
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';
import styles from "../styles/Hero.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const Hero = () => {
    return (
        <div className={styles.hero}>
            {/* First Row */}
            <div className={styles.firstRowGrid}>
                <h1 className={styles.firstName}>Paul</h1>
                <div className={styles.firstUrl}>
                    <div className={styles.circle}></div>
                    <a href="https://github.com/pdd27673" target={"_blank"} className={styles.link}>
                        https:// github.com/ pdd27673
                    </a>
                </div>
            </div>

            {/* Second Row */}
            <div className={styles.secondRow}>
                <div className={styles.secondPhoto}>
                    <div className={styles.secondRectangle}></div>
                    <Image src={profilePic} className={styles.photo} alt="Your Image"/>
                </div>
                <h1 className={styles.secondLastName}>Doho</h1>
            </div>

            {/* Third Row */}
            <div className={styles.thirdRow}>
                <div className={styles.thirdTitle}>Software Engineer</div>
                <a href="#about" className={styles.thirdArrow}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </a>
                <div className={styles.thirdPortfolioText}>Portfolio 2023</div>
            </div>
        </div>
    );
}


export default Hero