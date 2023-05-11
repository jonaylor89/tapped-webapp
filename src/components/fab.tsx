import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const scrollThreshold = 10

export default function FloatingActionButton() {
    const [downArrow, setDownArrow] = useState(true)
    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position < scrollThreshold != downArrow) {
            setDownArrow(!downArrow);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    })

    const onClick = () => {
        if (window.pageYOffset < scrollThreshold) {
            document.getElementById("footer")?.scrollIntoView({ behavior: 'smooth' })
        } else {
            document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <div
                onClick={onClick}
                className="hidden md:flex fixed bottom-10 right-10 justify-center w-16 h-16 rounded-full bg-white drop-shadow-lg cursor-pointer"
            >
                <div className="flex flex-col justify-center">
                    {downArrow
                        ? <FaArrowDown size={18} color="black" />
                        : <FaArrowUp size={18} color="black" />
                    }
                </div>
            </div>
        </>
    )
}