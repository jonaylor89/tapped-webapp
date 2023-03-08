
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBarItem = (props: { label: string, tag: string }) => {
    return (
        <div className="flex justify-end p-2 text-md font-bold lg:text-xl lg:px-5 lg:hover:text-indigo-600">
            <button onClick={() => document.getElementById(props.tag)?.scrollIntoView()}>
                {props.label}
            </button>
        </div>
    )
}

export default function Nav() {
    const [open, setOpen] = useState(true);

    return (
        <nav className="lg:flex lg:justify-end lg:shadow-lg">
            <div className="flex justify-end items-center px-4 py-4">
                <div className="lg:hidden pt-2">
                    {open ? (
                        <AiOutlineMenu fontSize={28} onClick={() => setOpen(!open)} />
                    ) : (
                        <AiOutlineClose fontSize={28} onClick={() => setOpen(!open)} />
                    )}
                </div>
            </div>
            <div className={open ? "hidden px-4 lg:flex lg:flex-row lg:pt-5" : "block px-4 lg:flex lg:flex-row"}>
                <NavBarItem label="HOME" tag="home" />
                <NavBarItem label="TESTIMONIALS" tag="testimonials" />
                <NavBarItem label="AFFILIATE" tag='affiliate' />
            </div>
        </nav>
    );
}

