import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { Link } from "@inertiajs/react";

const Hero = () => {
    return (
        <div className=" mt-10 ">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

            <div className=" flex flex-col items-center justify-center  space-y-5">
                <div>
                    <h1 className=" text-center text-4xl md:text-6xl font-bold bg-gradient-to-b from-[#ffffff] to-[#838383] bg-clip-text text-transparent">
                        Innovate, Excel, Succed
                    </h1>
                </div>

                <div>
                    <p className=" text-lg text-gray-400  text-center">
                        We are a team of passionate developers, designers and
                        innovators.
                    </p>
                </div>
                <div>
                    <RainbowButton>
                        <Link href="/">
                        Get Started
                        </Link>

                        </RainbowButton>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default Hero;
