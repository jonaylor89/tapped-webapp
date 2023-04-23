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
                    <div className="flex justify-center">
                        <Image
                            src="/images/tapped_reverse.png"
                            alt="tapped logo"
                            width={300}
                            height={300}
                        />
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