import Image from "next/image";
import Link from "next/link";

export default function Landing() {

    return (
        <>
            <div
                id="home"
                className="flex md:h-screen bg-gradient-to-br from-blue-500 to-cyan-400"
            >
                <div className="pb-20 w-full">
                    <div className="flex mb-4 pb-4 pt-4 pl-4">
                        <Image
                            src="/images/icon_1024.png"
                            alt="tapped logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:pl-12 md:pr-12 lg:pl-32 lg:pr-36">

                            <h1 className="flex 
                            justify-center 
                            text-center 
                            md:text-start 
                            text-5xl
                            md:text-8xl 
                            lg:text-9xl 
                            tracking-tighter 
                            md:justify-start">
                                DISCOVER. <br />
                                BOOK. <br />
                                REVIEW.
                            </h1>
                            <p className="flex justify-center md:text-2xl pt-8 pb-2 text-center md:text-start md:justify-start">
                                streamline your gig bookings with ease: connect with mangement, book talent, and amplify your events!
                            </p>
                            <p className="flex justify-center text-center pb-8 md:text-start md:justify-start">
                                raising $500,000 💰 located in nyc 📍 1.5k users 🫂 live on app store 📱
                            </p>

                            <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:justify-start">
                                <Link href="/download">
                                    <button className="bg-gray-800 hover:bg-gray-400 text-gray-300 hover:text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center duration-300">
                                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                        <span>download</span>
                                    </button>
                                </Link>
                                <Link href="/more">
                                    <button className="bg-transparent text-white font-semibold py-2 px-4 border border-white hover:border-gray-400 duration-300 rounded-full">
                                        learn more
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="pt-10 md:pt-0 pr-5 pl-5 md:pr-20 flex justify-center">
                            <Image src="/images/iphone.png" alt="app mockup" width={500} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
