import { FaArrowAltCircleRight } from "react-icons/fa";

import React, { Children } from 'react';

const Button = ({ text }) => {
    return (
        <div className="flex justify-between items-center rounded-full bg-orange-500 p-2">
            <p className="  text-white font-medium">{text}</p>
            <FaArrowAltCircleRight className="text-4xl text-white " />


        </div>
    );
};

export default Button;