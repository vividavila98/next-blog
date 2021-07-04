import Link from "next/link";

export default function Post({post}) {
    return (
        <div className="card">
            <div className="date">{post.frontmatter.date}</div>
            <div className="card-info">
                <h3 className="card-title">{post.frontmatter.title}</h3>
                <Link href={`/blog/${post.slug}`}><a className="card-btn">Read More</a></Link>
            </div>
            <hr />
        </div>
    )
}
