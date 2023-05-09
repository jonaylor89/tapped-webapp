
import Link from "next/link";
import {
    AiFillTwitterCircle,
    AiFillInstagram,
} from "react-icons/ai";

import { FaTiktok } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer>
                {/* TODO  add on-hover interactions */}
                <div className="flex flex-row justify-center items-center">
                    <div className="px-3 py-3 hover:scale-110">
                        <a href="https://twitter.com/tappednetwork" target="_blank" rel="noopener noreferrer">
                            <AiFillTwitterCircle fontSize={28} color="#fff " />
                        </a>
                    </div>
                    <div className="px-3 py-3 hover:scale-110">
                        <a href="https://instagram.com/tappednetwork" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram fontSize={28} color="#fff" />
                        </a>
                    </div>
                    <div className="px-3 py-3 hover:scale-110">
                        <a href="https://tiktok.com/@tappednetwork" target="_blank" rel="noopener noreferrer">
                            <FaTiktok fontSize={24} />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    Made with 💜 in Richmond, Virginia 
                </div>
                <br />
                <div className="flex justify-center mt-5">
                    Contact us at
                    <a className="font-bold px-1 text-blue-500" href="mailto:tappednetwork@gmail.com">
                        support@tapped.ai
                    </a>
                </div>
                <div className="flex justify-center mt-5">
                    <Link className="font-bold px-1 text-blue-500" href="/privacy">
                        Privacy Policy
                    </Link>
                </div>
                <div className="flex justify-center text-sm font-light mb-5">
                    Tapped App LLC {new Date().getFullYear()}
                </div>
            </footer>
        </>
    )
}
