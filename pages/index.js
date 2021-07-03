import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profilePic from '../public/images/me.png';
import realPic from '../public/images/real-me.jpg';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Viviana Davila | Web Dev</title>
        <meta name="description" content="Web Dev Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>
        <h1 className={styles.title}>From One Junior Dev to Another</h1>
        <p className={styles.intro}>Hello! My name is Viviana, and I’m a Front-End Web Developer. 
          As a self-taught developer, I rely on technical blogs like these to help me work towards solutions 
          and become a stronger programmer. As a junior dev, it’s my hope that I can explain concepts more simply 
          and help out my fellow junior devs out there. Good luck!</p>
        </div>
        <div>
        <Image src={profilePic} className={styles.topPic} alt="Animated picture of me" />
        </div>
      </header>
    </div>
  )
}
