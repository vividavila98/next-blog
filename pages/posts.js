import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Blog({ posts }) {
    return (
        <div className="container">
            <Head>
                <title>Viviana Davila | Web Dev</title>
                <meta name="description" content="Web Dev Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <article>
                <h1>Posts</h1>
                <section>
                    <div className="posts">
                    {
                        posts.map((post, index) => (
                        <Post post={post} key={index}/>
                        
                        ))
                    }
                    </div>
                </section>
            </article>
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
