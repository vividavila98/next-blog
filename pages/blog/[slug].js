import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

export default function PostPage({frontmatter: {title, date}, slug, content}) {
    return (
        <div className="container">
            <article dangerouslySetInnerHTML={{__html: marked(content)}}>
            </article>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

    const {data: frontmatter, content} = matter(markdownWithMeta);


    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
