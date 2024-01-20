import React, { useState } from 'react';
import expand from "../Assets/expand.svg";
const Accordion = ({ question, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex flex-col">
            <div  className='border-solid border-blue-600 border-[1.5px] rounded-[15px] w-[65vw] max-h-max h-[100%] mb-[2rem] justify-center cursor-pointer '
            onClick={() => setIsActive(!isActive)}>
                <div className='flex  justify-between ml-[1.2rem] mt-[.3rem] py-[1rem] font-semibold text-[16px]' >
                    <div className=''>{question}</div>
                    <div>{isActive ? <img className='mr-[1.3rem]' 
                    style={{"-webkit-transform": "scaleY(-1)",
                       "transform": "scaleY(-1)"}}
                       src={expand} alt="" /> : <img className='mr-[1.3rem]'src={expand} alt="" />}</div>
                </div>
                {isActive && <div className="ml-[1.2rem] mt-[.1rem] mb-[2rem] ">{content}</div>}
            </div>

        </div>
    );
};

export default Accordion;