import React from 'react'
import styles from "./About.module.scss"
import profilePic from "../../../public/images/hero-profile.jpg";
import Image from "next/image";

type Props = {}

const About = (props: Props) => {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.aboutSection}>
                    <h3 className={styles.p2}>P. 02</h3>
                    <div className={styles.p2Border}/>
                    <h1 className={styles.aboutSectionHeader}>About Me</h1>
                    <div className={styles.aboutText}>
                        <p>Highly meticulous and skilled Software Development Engineer with 2 years of extensive experience in fullstack development, cloud infrastructure management, and meticulous documentation verification.  </p>
                        <p>I am enthusiastic about utilizing my expertise to propel innovation and streamline operations within a dynamic team setting. Keen on embracing challenging positions that facilitate personal and collective growth while promoting the sharing of knowledge. </p>
                        <p className={styles.link}>www.pauldoho.com</p>
                    </div>
                </div>
                <div className={styles.photoRow}>
                    <Image src={profilePic} className={styles.photo} alt="Your Image"/>
                    <div className={styles.detailedTitle}>
                        <div>Software Engineer <br/></div>
                        <div>Full Stack & Cloud</div>
                    </div>
                </div>
            <div className={styles.crescent}/>
            </div>
        </>
    )
}
export default About