import { FaCheckCircle } from "react-icons/fa"

export default function Affiliate() {
    return (
        <>
            <section id="affiliate">
                <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-affiliate">
                    <div className="flex justify-between gap-8 flex-col md:flex-row bg-black mx-5 md:mx-20 p-4 md:p-12 rounded-md">
                        <div>
                            <h3 className="text-xl md:text-2xl lg:text-4xl py-3 font-bold">Become an Affiliate</h3>
                            <br />
                            <p className="md:text-lg lg:text-xl font-thin">The Tapped Affiliate Program puts qualified musicians one step closer closer toward the dream of making a living from their passions. Tapped Affiliates can start earning income along with their badges</p>
                            <div className="mt-5 flex justify-center md:justify-start">
                                <a
                                    href="https://forms.gle/ckWTwXNTLMw6t2mg8"
                                    target="_blank"
                                    type="button"
                                    className="hover:text-white bg-tapped-blue text-black font-bold py-2 px-4 rounded"
                                >Join the Waitlist</a>
                            </div>
                        </div>
                        <div className="flex justify-center px-4">
                            <FaCheckCircle color="#0086CC" size={150} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}