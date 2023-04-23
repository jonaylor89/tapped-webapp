import React from 'react'
import Image from 'next/image'

import { motion } from "framer-motion"

export default function Card(props: {
    title: string;
    subtitle: string;
    link: string;
    cover: string;
    i: number;
}) {

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50
            },
        }),
        hidden: { opacity: 0, y: 200 }
    }

    return (
        <a href={props.link} className="hover:bg-slate-900 rounded-xl">
            <motion.div className="p-8 rounded h-52 md:h-60 mr-1  mt-1"
                initial="hidden"
                animate="visible"
                custom={props.i}
                variants={variants}>

                <Image className="object-cover rounded-xl w-full h-20 md:h-28"
                    src={props.cover}
                    alt={props.title}
                    width={512}
                    height={512} />
                <div className="mt-2">
                    <h2 className="leading-5 tracking-tight text-2xl mb-2 mt-2">{props.title}</h2>
                    <p className="md:mb-3 text-neutral-600">{props.subtitle}</p>
                </div>
            </motion.div>
        </a>
    )
}