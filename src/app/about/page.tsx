'use client'
import React,{useEffect, useRef} from "react";
import {useMotionValue, useSpring, useInView} from "framer-motion"

import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import Skills from "../components/Skills";

const AnimatedNumbers = ({value}:any) => {
const ref = useRef(null)

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInview = useInView(ref)

useEffect(() => {
    if(isInview){
        motionValue.set(value)
    }
}, [isInview, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
       if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
       }
    })
}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <title>Arthur's About Page</title>
            <NavBar />
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose" className="mb-4" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="ml-28 col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-black/75">Biography</h2>
                            <p className="mb-4">Hi, I'm a Software Developer with passion for creating beautiful, functional, and user-centered digital experiences.
                                With determination and adaptability, i am always looking for new and innovative ways.</p>

                            <p className="mb-4">I believe that writing code is more than just creating beautiful projects, it's about solving problems and creating intuitive, enjoyable experiences for the users.</p>
                            <p>Whether I'm working on a website, mobile app, or
                                other digital products, I do my best and user-centered thinking to every project I work on I look forward to
                                opportunity to bing my skills and passion for your next project.</p>

                        </div>
                        <div className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black">

                            </div>
                            <Image src="/Perfil.png" alt="Perfil" width={300} height={300} className="w-full  h-auto rounded-2xl" />
                        </div>
                        <div className="mr-16 col-span-2 flex flex-col justify-between">
                            <div className="flex flex-col items-end justify-between">
                                <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={10}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-black/75">Satisfied clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={40}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-black/75">Projects completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                                <span className="inline-block text-7xl font-bold">
                                <AnimatedNumbers value={1}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-black/75">Years of experience</h2>
                            </div>
                        </div>
                    </div>
                        <Skills />
                </Layout>
               
            </main>
            <div className="mt-8">
                <Footer />
                </div>
        </>
    )

}
export default about;