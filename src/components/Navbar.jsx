import React from 'react'
import logo from "../Assets/hyggexlogo.svg";
export default function Navbar() {
    return (
        <div className='flex justify-between items-center w-[94%] ml-[2rem] mt-[2rem] ' >
            <div className='w-[18vw] hover:scale-105 hover:shadow-xl cursor-pointer'>
                <img src={logo} alt="" />
            </div>
            <div className=' flex gap-[3vw] mr-[10vw] '>
                <ul className='flex items-center gap-[3vw]  '>
                    <li className='hover:scale-105 hover:shadow-xl'>
                        <a className='hover:scale-105 text-[1.5vw] cursor-pointer ' href='#'>Home</a>
                    </li>
                    <li className='hover:scale-105 hover:shadow-xl'>
                       
                        <a className='hover:scale-105 text-[1.5vw] cursor-pointer' href='#'>Flascard</a>
                    </li>
                    <li className='hover:scale-105 hover:shadow-xl'>
                        <a className=' text-[1.5vw] cursor-pointer' href='#'>Contact</a>
                    </li>
                    <li className='hover:scale-105 hover:shadow-xl'>
                        <a className='hover:scale-105 text-[1.5vw] cursor-pointer' href='#'>FAQ</a>
                    </li>

                </ul>
                <div>
                <button className='border-solid rounded-[25px] bg-blue-700 w-[10vw] h-[3.5vw] cursor-pointer hover:scale-105'>
                    <p className='text-white text-[1.6vw]'>Login</p>
                </button>
            </div>

            </div>


        </div>
    )
}
