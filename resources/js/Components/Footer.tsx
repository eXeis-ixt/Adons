import { Link } from "@inertiajs/react";
import React from "react";
import Heading from "./ui/Heading";

const Footer = ({ version }: { version?: string }) => {
    return (
        <footer className=" relative w-full bg-gradient-to-br from-black to-[#101010] backdrop-blur-xl rounded-md">
              <div className="absolute top-1/2 left-1/2 -z-10 gradient-footer w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <Link
                            href="/"
                            className="flex justify-center lg:justify-start"
                        >
                            <Heading title="Adons Tech" />
                        </Link>
                        <p className="py-8 text-sm text-gray-300 lg:max-w-xs text-center lg:text-left">
                            Trusted in more than 8 countries & 100+
                            customers. Have any query?
                        </p>
                        <Link
                            href={(route('contact'))}
                            className="text-white hover:scale-105  delay-75 bg-primary-600 px-4 py-2 ring-2 ring-[#7081ff] rounded-md transition-colors"
                        >
                            Contact us
                        </Link>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-400 font-medium mb-7">
                            Links
                        </h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6">
                                <Link
                                    href={route('home')}
                                    className="text-gray-400 hover:text-gray-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link
                                    href={route('about')}
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="mb-6">
                                <Link
                                    href={route('products')}
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('blog')}
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-400 font-medium mb-7">
                            Products
                        </h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className="text-gray-400 hover:text-gray-400"
                                >
                                    Figma UI System
                                </a>
                            </li>
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Icons Assets
                                </a>
                            </li>
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Responsive Blocks
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Components Library
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-400 font-medium mb-7">
                            Resources
                        </h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className="text-gray-400 hover:text-gray-400"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Quick Start
                                </a>
                            </li>
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    User Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-400 font-medium mb-7">
                            Blogs
                        </h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className="text-gray-400 hover:text-gray-400"
                                >
                                    News
                                </a>
                            </li>
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Tips & Tricks
                                </a>
                            </li>
                            <li className="mb-6">
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    New Updates
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:;"
                                    className=" text-gray-400 hover:text-gray-400"
                                >
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-500">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-300 ">
                            © <Link href="/">Adons Tech</Link> 2023 -
                            {new Date().getFullYear()} , All rights reserved.
                        </span>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
