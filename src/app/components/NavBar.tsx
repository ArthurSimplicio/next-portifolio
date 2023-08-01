"use client"
import Link from "next/link"
import React from "react"
import { useRouter, usePathname } from "next/navigation"
import Logo from "./Logo"
import LinkedinIcon, { GithubIcon } from "./icons"
import { motion } from "framer-motion"

const CustomLink: any = ({ href, title, className = "" }: any) => {
    const router = useRouter();
    const usePathnamer: any = usePathname()
    console.log(router)
    console.log(usePathnamer)

    return (
        <><Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-blue-950 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
        </>
    )
}

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4">Home</CustomLink>
                <CustomLink href="/about" title="About" className="mx-4">About</CustomLink>
                <CustomLink href="/projects" title="Projects" className="mx-4">Projects</CustomLink>
                <CustomLink href="/articles" title="Articles" className="ml-4">Articles</CustomLink>
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://www.linkedin.com/in/arthur-simpl%C3%ADcio-5056b6273/" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-8 mr-3"><LinkedinIcon /></motion.a>
                <motion.a href="https://github.com/ArthurSimplicio" target={"_blank"} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className="w-8 mr-3"><GithubIcon /></motion.a>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[50%]" >
                <Logo />
            </div>
        </header>
    )
}
export default NavBar