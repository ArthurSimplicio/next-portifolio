import React from "react";
import Image from "next/image";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar"
import AnimatedText from "./components/AnimatedText";
import Footer from "./components/Footer"
import Link from "next/link";
import HireMe from "./components/HireMe";

const montserrat = ({
  subsets: ["latin"],
  variable: "--font-mont"
})
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex items-center text-blue-950 w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 ">
              <Image src="Developer.svg" alt="Picture" width={600} height={600} className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              
              <AnimatedText className="text-6xl" text="Turning Vision Into Reality With Code!" />
              <p className="my-4 text-base font-semibold">
                As a skilled full-stack developer, i am dedicated to turning ideas into innovative applications. Explore my latest projects, showcasing my expertise in Web & Mobile Development.
              </p>
              <div className=" mt-2">
                <Link href="/" target="_blank" className="flex items-center self-start bg-black text-white p-2 px-10 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border border-solid border-transparent hover:border-black">Resume</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
      <div className="">
          
          <Footer />
        </div>
    </>
  );
}
