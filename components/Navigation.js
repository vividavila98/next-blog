import Link from "next/Link";
import { useRouter } from "next/router";

export default function Navigation() {
    const router = useRouter();

    return (
        <nav className="container">
            <ul>
                <li className="logo"><Link href="/">V</Link></li>
                <li className={router.pathname == "/" ? "active" : ""}><Link href="/">home</Link></li>
                <li className={router.pathname == "/blog" ? "active" : ""}><Link href="/blog">blog</Link></li>
                <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about">about</Link></li>
                <li><Link href="https://www.vivianadavila.dev/" passHref={true}>portfolio</Link></li>
                <li><Link href="mailto:vividavila98@gmail.com">contact</Link></li>
            </ul>
        </nav>
    )
}
