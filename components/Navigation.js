import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import ham from "../public/images/ham.svg";

export default function Navigation() {
    const router = useRouter();
    const [displayNav, setDisplayNav] = useState(false);

    useEffect(() => {
        setDisplayNav(false);
    }, [router.pathname])

    return (
        <>
        <nav className="container desktop">
            <ul>
                <li className="logo"><Link href="/">V</Link></li>
                <li className={router.pathname == "/" ? "active" : ""}><Link href="/">home</Link></li>
                <li className={router.pathname == "/posts" ? "active" : ""}><Link href="/posts">posts</Link></li>
                <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about">about</Link></li>
                <li><a href="https://www.vivianadavila.dev/" target="_blank" rel="noopener noreferrer">portfolio</a></li>
                <li><Link href="mailto:vividavila98@gmail.com">contact</Link></li>
            </ul>
        </nav>
        <nav className="container mobile">
            <div className="mobile-header">
                <Link href="/"><span className="logo">V</span></Link>
                <button className="ham" onClick={() => setDisplayNav(!displayNav)}><Image height={35} width={35} src={ham} /></button>
            </div>
                <ul className={displayNav ? "visible" : ""}>
                    <li className={router.pathname == "/" ? "active" : ""}><Link href="/">home</Link></li>
                    <li className={router.pathname == "/blog" ? "active" : ""}><Link href="/posts">posts</Link></li>
                    <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about">about</Link></li>
                    <li><a href="https://www.vivianadavila.dev/" target="_blank" rel="noopener noreferrer">portfolio</a></li>
                    <li><Link href="mailto:vividavila98@gmail.com">contact</Link></li>
                </ul>
        </nav>
        </>
    )
}
