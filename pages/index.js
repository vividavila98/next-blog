import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import realPic from '../public/images/real-me.jpg';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import axios from "axios";

export default function Home({ posts }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = e => {
    setEmail(e.target.value);
  }

  const subscribe = async (e) => {
    e.preventDefault();

    setStatus("Loading ...");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/subscribe", {email});
      console.log(response);
      setStatus("Successfuly subscribed!");
      setEmail("");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setStatus("Something went wrong :(");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Viviana Davila | Blog </title>
        <meta name="description" content="Web Dev Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.introBox}>
        <h1 className={styles.title}>Viviana Davila</h1>
        <p className={styles.intro}>Hello! My name is Viviana, and I’m a Front-End Web Developer. 
          As a self-taught developer, I rely on technical blogs like this to help me work towards solutions 
          and become a stronger programmer. As a junior dev, it’s my hope that I can explain concepts more simply 
          and help out my fellow junior devs out there. Good luck!</p>
        </div>
        <div className={styles.picBox}>
        <Image src={realPic} className={styles.topPic} width={300} height={300} alt="Animated picture of me" />
        </div>
      </header>
      <section>
        <h2 className={styles.postTitle}>Recent Posts</h2>
        <div className="posts">
          {
            posts.map((post, index) => (
              <Post post={post} key={index}/>
              
            ))
          }
        </div>
      </section>

      <section className={styles.subscribe}>
        <div className={styles.subBox}>
        <h2 className={styles.subTitle}>Subscribe</h2>
        <p className={styles.subInfo}>Want to learn more about Web Development? Sign up with your email to be notified everytime
           I add a new post!</p>
        </div>
        <div className={styles.subBox}>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>Email Address</label>
          <input 
            name="email" 
            type="email" 
            placeholder="dev@gmail.com" 
            className={styles.input}
            value={email}
            onChange={handleChange}
            />
          <button className={styles.btn} onClick={subscribe}>Sign Up</button>
          <span className={styles.outline}></span>
          <p className={styles.status}>{status}</p>
        </form>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const {data: frontmatter} = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}