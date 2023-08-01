'use client'
import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
    return(
        <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
                <div className="flex items-center">
                Build With<span className="text-red-600 text-2xl px-1">&#9825;</span>by&nbsp;
                <Link href="https://www.instagram.com/arthursimplcio/" target="_blank" className="underline underline-offset-2">Arthur</Link>
                </div>
                <Link href="/" className="underline underline-offset-2">SayHello</Link>
            </Layout>
        </footer>
    )
}

export default Footer