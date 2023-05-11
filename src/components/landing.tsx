import Image from "next/image";

import {
    GooglePlayButton,
    AppStoreButton,
} from "@/components/react-mobile-app-button";

export default function Landing() {

    const appleUrl = "https://testflight.apple.com/join/TbVZMGhA"
    const googleUrl = "https://play.google.com/store/apps/details?id=com.intheloopstudio"

    return (
        <>
            <div
                id="home"
                className="flex md:h-screen bg-gradient-to-r from-blue-500 to-cyan-500"
            >
                <div className="pb-20 w-full">
                    <div className="flex mb-16 pb-4 pt-4 pl-4 backdrop-blur-sm bg-white/30 ">
                        <Image
                            src="/images/icon_1024.png"
                            alt="tapped logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="md:pl-12 md:pr-12 lg:pl-32 lg:pr-36">

                        <h1 className="flex justify-center text-center md:text-start text-2xl md:text-8xl lg:text-9xl tracking-tighter md:justify-start">
                            FIND, BOOK, AND PAY TALENT IN 3 TAPS
                        </h1>
                        <div className="flex justify-center md:text-2xl pt-8 pb-8 text-center md:text-start md:justify-start">
                            raising $300,000 💰 located in nyc 📍 1.5k users 🫂 live on app store this summer 📱
                        </div>

                        <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:justify-start">
                            <GooglePlayButton
                                url={googleUrl}
                                theme={"dark"}
                            />
                            <AppStoreButton
                                url={appleUrl}
                                theme={"dark"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
