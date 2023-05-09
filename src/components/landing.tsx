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
                    <div className="flex justify-center pb-6 pt-6">
                        <Image
                            src="/images/tapped_reverse.png"
                            alt="tapped logo"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="flex justify-center font-bold md:text-4xl pr-4 pl-4 md:pr-20 md:pl-20 text-center">
                    a social platform for the entertainment industry where individuals can network, secure gigs, and promote their portfolio.
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:mt-12">
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
