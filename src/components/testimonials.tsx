
const Testimonial = ({ name, text }: {
    name: string;
    text: string;
}) => {
    return (
        <div className="mx-2 bg-black px-5 rounded-md">
            <p className="text-grey-300 text-2xl">&quot;{text}&quot;</p>
            <div className="flex justify-end">
                <h3 className="font-bold text-5xl py-2 text-tapped-blue">- {name}</h3>
            </div>
        </div>
    );
}

export default function Testimonials() {

    const daytyme = { name: 'Daytyme Über', text: "I've been using Tapped for the past few months and I have to say, it's been a game-changer for me. As a musician, it's always been difficult to prove my experience to booking agents and event planners, but with Tapped, I can easily share my verified experience with just a few clicks. It's made the booking process so much smoother and I've been getting more gigs than ever before. I highly recommend Tapped to any musician looking to increase their bookings!" }
    const els = { name: 'Els', text: "Before I started using Tapped, I was always worried that my lack of experience would hold me back in the music industry. But with Tapped, I've been able to prove my worth and land gigs that I never would have been considered for before. It's an incredible feeling to be able to showcase my verified experience to potential clients, and I know that Tapped has been a big part of my success." }

    const scott = { name: 'Scott Brown', text: "As a booking agent, I'm always looking for ways to streamline the booking process and ensure that the musicians I'm working with have the experience they claim to have. Tapped has been an incredible tool for me in that regard. With Tapped, I can quickly and easily verify a musician's experience, saving me time and giving me peace of mind that I'm working with the best possible talent. I would definitely recommend Tapped to any booking agent looking to improve their workflow." }
    const joaquin = { name: 'Joaquin Pérez', text: "I've been using Tapped for a few months now, and I can't imagine going back to the old way of doing things. Tapped has made it so easy for me to verify a musician's experience, and it's given me a level of confidence in my bookings that I never had before. I've been able to work with some incredible talent thanks to Tapped, and I'm excited to continue using this app to find the best musicians for my events." }

    return (
        <>
            <section id="testimonials">
                <div className="h-screen flex flex-col bg-black">
                    <div className="flex justify-end">
                        <h2 className="text-8xl mx-20 py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-500">
                            Verify your experience
                        </h2>
                    </div>
                    <div className="flex flex-row justify-between mb-12">
                        <Testimonial name={daytyme.name} text={daytyme.text} />
                    </div>
                    <div className="mb-12">
                        <Testimonial name={els.name} text={els.text} />
                    </div>
                </div>
                <div className="h-screen flex flex-col bg-black">
                    <div className="flex justify-start">
                        <h2 className="text-8xl p-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">
                            Transforming how <br />talent is discovered
                        </h2>
                    </div>
                    <div>
                        <Testimonial name={scott.name} text={scott.text} />
                    </div>
                    <div>
                        <Testimonial name={joaquin.name} text={joaquin.text} />
                    </div>
                </div>
            </section>
        </>
    )
}