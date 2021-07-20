import Head from "next/head";
import Image from "next/image";
import animPic from '../public/images/about-cover.png';
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Viviana Davila | Web Dev</title>
        <meta name="description" content="Web Dev Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <h1>A Little About Me</h1>
        <div className={styles.imgContainer}>
        <Image src={animPic} alt="Animated picture of me" />
        </div>
        <p>
          Hello again! My name is Viviana Davila, and I’m a Front-End Wed 
          based in Los Angeles, CA. I graduated from UC San Diego where I 
          studied Cognitive Science with a specialization in Design &amp; Interaction.
          </p>
          <p>
          During my time at UCSD, I studied UX/UI design, which led me to my path towards 
          Front-End Development. I started to teach myself how to code, starting with HTML, CSS, 
          and JavaScript. From there, I just couldn’t get enough of web development. I honed in on my 
          JavaScript skills and learned how to work with ReactJS during my internships. Since then, I 
          have worked with some fun technologies, including React Native NextJS, and Redux. </p>
          <p>
          I started this blog for other junior developers who are like me: self-taught, non-CS degree, but with a desire to 
          learn everything there is to do with web development. Navigating this industry can be intimidating, which is why I feel 
          it is so important to help out others in this community. I still have SO much left to learn, but this is my way of contributing 
          to a group that has given me so much already! 
          </p>
      </article>
    </div>
  )
}
