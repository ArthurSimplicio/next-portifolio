import React from "react";
import { motion } from "framer-motion"

const Skill = ({name, x, y}:any) => {
    return(
        <motion.div className="absolute px-6 py-3 flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer" 
            whileHover={{ scale:1.18}}
            initial={{x:0,y:0}}
            animate={{x:x, y:y}}
            transition={{duration: 1.5}}>
             {name}
            </motion.div >
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer"
                    whileHover={{ scale: 1.18 }}>
                    Web
                </motion.div>
                
                <Skill name='CSS' x="-5vw" y="-7vw"/>
                <Skill name='HTML' x="-15vw" y="1vw"/>
                <Skill name='Tailwind' x="-20vw" y="-15vw"/>
                <Skill name='Javascript' x="0vw" y="10vw"/>
                <Skill name='React' x="-5vw" y="17vw"/>
                <Skill name='Typescript' x="-20vw" y="10vw"/>
                <Skill name='NextJS' x="-35vw" y="0vw"/>
                <Skill name='MongoDB' x="34vw" y="-5vw"/>
                <Skill name='React Native' x="35vw" y="12vw"/>
            </div>
        </>
    )
}

export default Skills