import React from 'react'
import data from "../Utils/data.jsx";
import  Accordion  from "./Accordion.jsx";


const FAQ = () => {
   
    return (
        <div className='flex flex-col mt-[4rem]'>
            <p className='text-blue-900 text-[4vw] font-bold ml-[9vw] mb-[3vw]'>FAQ</p>
            
            <div className='ml-[9vw] '>
                {data.map((question)=>{

                 return (
                    <Accordion question={question.heading} content={question.detail}/>
                 )
                })}
            </div>
        </div>
    )
}
export default FAQ;