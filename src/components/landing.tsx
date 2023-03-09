import { useState } from "react";
import Image from "next/image";

export default function Landing() {

    return (
        <>
            <div
                id="home"
                className="flex h-screen"
            >
                <div className="m-auto">
                    <div className="flex justify-center">
                        <Image
                            src="/images/tapped_reverse.png"
                            alt="tapped logo"
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className="font-bold py-20 text-2xl lg:text-6xl">
                        Know who you&apos;re working with
                    </h1>
                </div>
            </div>
        </>
    )
}