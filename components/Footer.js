import Link from "next/Link";

export default function Footer() {
    return (
        <footer>
            <div className="container">
            <ul>
                <li className="logo">From One Junior <br/> Dev to Another</li>
                <li><Link href="/">home</Link></li>
                <li><Link href="/blog">blog</Link></li>
                <li><Link href="/about">about</Link></li>
                <li><Link href="/">portfolio</Link></li>
                <li><Link href="mailto:vividavila98@gmail.com">contact</Link></li>
            </ul>
            </div>
        </footer>
    )
}
