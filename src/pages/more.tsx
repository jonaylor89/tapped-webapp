
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="pl-4 pr-4 md:pl-24 md:pr-24 md:pb-24">
                <h1 className="flex justify-center text-center mb-10 mt-20 text-3xl md:text-6xl tracking-tighter md:justify-start">
                    Welcome to Tapped: The Premier Music Industry Network!
                </h1>

                <div className="text-center md:text-start md:text-xl font-thin text-gray-300">
                    At Tapped, we have created a dedicated platform that brings together
                    professionals from all corners of the music industry, providing a
                    dynamic space for networking, collaboration, and discovery.
                    Whether you are a music label executive, A&R representative,
                    musician, promoter, or DJ, Tapped offers a
                    seamless experience tailored to your specific needs.
                </div>
                <h2 className="text-center md:text-start text-3xl mt-10 mb-5">
                    Connect and Collaborate
                </h2>
                <div className="text-center md:text-start md:text-xl font-thin text-gray-300">
                    Tapped provides a unique opportunity for individuals in the music
                    industry to connect and collaborate like never before.
                    Our platform allows you to build your professional network by
                    connecting with industry experts, like-minded professionals,
                    and potential collaborators from across the globe.
                    Share your latest projects, ideas, and achievements,
                    and discover new talent to enhance your creative journey.
                </div>

                <h2 className="text-center md:text-start text-3xl mt-10 mb-5">
                    Discover, Book, and Review Artists
                </h2>
                <div className="text-center md:text-start md:text-xl font-thin text-gray-300">
                    Promoters and booking agents, we&apos;ve got you covered!
                    With Tapped, you have access to an extensive database of
                    talented artists, making it effortless to discover fresh talent
                    that aligns with your specific event or venue.
                    Book artists directly through our platform, streamlining the
                    process and ensuring a seamless experience. After the performance,
                    leave reviews to help artists gain visibility and recognition within
                    the industry.
                </div>

                <h2 className="text-center md:text-start text-3xl mt-10 mb-5">
                    Stay Informed and Inspired
                </h2>
                <div className="text-center md:text-start md:text-xl font-thin text-gray-300">
                    At Tapped, we believe that staying informed and inspired is
                    crucial for success in the music industry.
                    Our platform offers a wealth of resources, including industry
                    news, trends, and insights, helping you stay up-to-date with
                    the latest happenings. Engage in meaningful discussions,
                    participate in forums, and access educational content to
                    expand your knowledge and grow as a professional.
                </div>

                <h2 className="text-center md:text-start text-3xl mt-10 mb-5">
                    Join a Thriving Community
                </h2>
                <div className="text-center md:text-start md:text-xl font-thin text-gray-300">
                    By joining Tapped, you become part of a vibrant and supportive
                    community of music industry professionals. Exchange ideas,
                    seek advice, and forge valuable connections with individuals
                    who share your passion and drive. Collaborate on projects,
                    find mentors, and unlock exciting opportunities that can
                    propel your career forward.
                </div>
                <br />
                <div className="text-center md:text-start md:text-xl font-thin text-gray-300">
                    Join Tapped today and unlock the full potential 
                    of your music industry career. 
                    Connect, collaborate, and discover new 
                    opportunities that will elevate your professional journey. 
                    Together, let&apos;s shape the future of the music industry!
                </div>

                <div className="flex justify-center pt-4">
                    <Link href="/download">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center duration-300">
                            <span>Join the App</span>
                        </button>
                    </Link>
                </div>

                <div className="pt-10 md:pl-24 md:pr-24 lg:pl-44 lg:pr-44">

                    <div className="text-center md:text-start text-2xl font-bold mt-4 mb-4">
                        Q: How do I join Tapped?
                    </div>
                    <div className="text-center md:text-start text-xl font-bold text-gray-500">
                        A: Signing up for Tapped is quick and easy! Simply visit our website and create your account to start connecting with professionals in the music industry.
                    </div>

                    <div className="text-center md:text-start text-2xl font-bold mt-4 mb-4">
                        Q: Is Tapped only for established professionals, or can newcomers join too?
                    </div>
                    <div className="text-center md:text-start text-xl font-bold text-gray-500">
                        A: Tapped welcomes professionals at all stages of their music careers. Whether you&apos;re a seasoned executive or a budding artist, our platform offers valuable resources and opportunities for everyone.
                    </div>
                    <div className="text-center md:text-start text-2xl font-bold mt-4 mb-4">

                        Q: Is Tapped available as a mobile app?
                    </div>
                    <div className="text-center md:text-start text-xl font-bold text-gray-500">
                        A: Yes! Tapped is available as a mobile app for both iOS and Android devices, ensuring that you can stay connected and engaged while on the go.
                    </div>
                </div>
            </div>
        </>
    );
}