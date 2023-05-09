import Image from "next/image";
import { items } from "../items";
import Card from "./card";

export default function Landing() {

    return (
        <>
            <div
                id="home"
                className="flex md:h-screen"
            >
                <div className="m-auto">
                    <div className="flex justify-center pb-16 pt-4">
                        <Image
                            src="/images/tapped_reverse.png"
                            alt="tapped logo"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="flex justify-center font-bold md:text-6xl pr-8 pl-8 md:pr-32 md:pl-32 text-center">
                    network with professionals, secure gigs, and promote your portfolio.
                    </div>
                    <div className="flex justify-center md:text-2xl pt-8">
                        raising $300,000 💰 located in nyc 📍 1.5k users 🫂 live on app store this summer 📱
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:mt-12 mr-30 ml-30">
                        {
                            items.map((item, i) => {
                                return (
                                    <Card
                                        key={i}
                                        i={i}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        link={item.link}
                                        cover={item.image} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
