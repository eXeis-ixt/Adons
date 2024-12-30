import React from "react";

interface HeadingProps {
    title?: string;
    description?: string;
    size?: string;
}

const Heading = ({ title, description, size }: HeadingProps) => {
    return (
        <div>
            <h1 className={` text-3xl md:text-6xl  font-bold bg-gradient-to-b from-[#ffffff] to-[#838383] bg-clip-text text-transparent`}>
                {title}
            </h1>
        </div>
    );
};

export default Heading;
