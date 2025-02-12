import React from "react";
import Heading from "./ui/Heading";
import { RainbowButton } from "./ui/rainbow-button";
import { Link } from "@inertiajs/react";

const Branding = () => {
    return (
        <div>
            <section className=" py-24 relative w-full h-screen  bg-gradient-to-br from-black to-zinc-950 backdrop-blur-xl rounded-md ">



<div className=" w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">


            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient-big w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

                <div
                    className=" z-10 w-full hidden justify-center items-start gap-6 md:grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img className=" rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="about Us image" />
                    </div>
                    <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png"
                        alt="about Us image" />
                </div>

                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                           <Heading title="Empowering business with our products" />
                            <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                Every project we've undertaken has been a collaborative effort, where every person
                                involved has left their mark. Together, we've not only constructed thousands of products but also
                                built enduring connections that define our success story.</p>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div className="flex-col justify-start items-start inline-flex">
                                <h3 className="text-gray-400 text-4xl font-bold font-manrope leading-normal">3+</h3>
                                <h6 className="text-gray-300 text-base font-normal leading-relaxed">Years of Experience</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-gray-400 text-4xl font-bold font-manrope leading-normal">125+</h4>
                                <h6 className="text-gray-300 text-base font-normal leading-relaxed">Successful Projects</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-gray-400 text-4xl font-bold font-manrope leading-normal">100+</h4>
                                <h6 className="text-gray-300 text-base font-normal leading-relaxed">Happy Clients</h6>
                            </div>
                        </div>
                    </div>
                    <RainbowButton>
                        <Link href={(route('about'))}>
                        Learn More
                        </Link>
                    </RainbowButton>
                </div>
            </div>
        </div>

            </section>
        </div>
    );
};

export default Branding;
