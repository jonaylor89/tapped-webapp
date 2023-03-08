
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
                    Contact the team at
                    <a className="font-bold px-3 text-blue-500 hover:scale-105 ease-in" href="mailto:tappednetwork@gmail.com">
                        tappednetwork@gmail.com
                    </a>
                </div>
                <div className="flex justify-center text-sm font-light">
                    Tapped Network LLC {new Date().getFullYear()}
                </div>
            </footer>
        </>
    )
}