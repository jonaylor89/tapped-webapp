import Image from "next/image";
import Link from "next/link";

export default function Landing() {

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
                            FIND, BOOK, AND REVIEW TALENT IN 3 TAPS
                        </h1>
                        <div className="flex justify-center md:text-2xl pt-8 pb-8 text-center md:text-start md:justify-start">
                            raising $300,000 💰 located in nyc 📍 1.5k users 🫂 live on app store this summer 📱
                        </div>

                        <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:justify-start">
                            <Link href="/download">
                                <button className="bg-gray-800 hover:bg-gray-400 text-gray-300 hover:text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                    <span>Download</span>
                                </button>
                            </Link>
                            <Link href="/about">
                                <button className="hover:font-bold">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
