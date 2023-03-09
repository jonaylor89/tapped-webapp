import { useState } from "react";

export default function Landing() {
    const [buttonColor, setButtonColor] = useState("transparent")

    const handleScroll = () => {
        const top = window.pageYOffset || 0;
        if (top > 60) {
            setButtonColor("transparent")
        }
    }

    return (
        <>
            <div 
                id="home" 
                className="flex h-screen"
                onScroll={handleScroll}
                >
                <div className="m-auto">
                    <h1 className="font-bold py-20 text-2xl lg:text-6xl">
                        Know who you&apos;re working with
                    </h1>
                </div>
            </div>
        </>
    )
}