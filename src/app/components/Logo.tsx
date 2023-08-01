"use client"
import Link from "next/link"
import React from "react"
import {motion} from "framer-motion"

const MotionLink = motion(Link)
const Logo = () => {
    return (
    <div className="flex items-center justify-center mt-2">
    <MotionLink href="/" className=" w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold" 
    whileHover={{
        backgroundColor:["#030013", "#2EBC61", "#FEE000", "#3C3E90", "#fff"],
        transition:{duration:4, repeat: Infinity}
    }}
    >AS
    </MotionLink>
    </div>
    )
}
export default Logo