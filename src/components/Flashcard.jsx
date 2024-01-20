import React,{useState} from 'react'
import vector from "../Assets/Vector.svg";
import arrow from "../Assets/arrow.svg";
import bicon from "../Assets/bicon.svg";
import sicon from "../Assets/sicon.svg";
import fullscreen from "../Assets/fullscreen.svg";
import restart from "../Assets/restart.svg";
import left from "../Assets/left.svg";
import right from "../Assets/right.svg";
import logo2 from "../Assets/logo2.png";
import createFlashcard from "../Assets/createFlashcard.svg";
import "./fcard.css"

export default function Flashcard() {
    // using backgroundswitched to check which one background is used 
    const [backgroundswitched,setBackgroundSwitched]=useState(false);

    //function to creat switch effect on screen
    const switchbg=()=>{
        //taking screen
        const screen=document.querySelector(".screen");
        //taking text on screen 
        const screentext=document.querySelector(".screenText");
        //two icons on screen 
        const bicon=document.querySelector(".bicon");
        const sicon=document.querySelector(".sicon");

        screen.classList.toggle("motion")
        //setting screen text visiblity hidden
        screentext.classList.add("visible");
        //setting icons visiblity hidden
        bicon.classList.add("visible");
        sicon.classList.add("visible");

        //two conditions to check which one background is used for screen.
        if(backgroundswitched==false){
           setBackgroundSwitched(true);
           //removing   background1 css class
           screen.classList.remove("background1");
           //adding new background2 css clss
           screen.classList.add("background2");
           //changing the value of screen text.
           screentext.innerHTML="5x + 12";
        }
        else{
            setBackgroundSwitched(false);
             //removing   background2 css class
            screen.classList.remove("background2");
             //adding new background1 css clss
            screen.classList.add("background1");
            //changing the value of screen text.
            screentext.innerHTML="9 + 6 + 7x - 2x - 3"
        }
        setTimeout(()=>{
           //now making two icons and screen text visible
            screentext.classList.remove("visible");
            bicon.classList.remove("visible");
            sicon.classList.remove("visible");
        },200)
        setTimeout(()=>{
            //removing motion animation css class from screen.
            //so that it also work on next click on screen.
            screen.classList.remove("motion");
            
        },300)
       
        
       
    }
    return (
        <div className=''>
            <div className='flex ml-[3rem] mt-[6rem] gap-[.5rem] w-[50vw]'>
                <img className='w-[2vw]' src={vector} alt="" />
                <img className='w-[1vw]' src={arrow} alt="" />
                <p className='text-[1.5vw]'>Flashcard</p>
                <img className='w-[1vw]' src={arrow} alt="" />
                <p className='text-[1.5vw]'>Mathematics</p>
                <img className='w-[1vw]' src={arrow} alt="" />
                <p className='text-[1.5vw] text-blue-900 font-semibold'>Relation and Function</p>
            </div>
            <div className='ml-[3rem] mt-[4rem]'>
                <p className='text-[2.7vw] text-blue-900 font-bold'>Relations and Functions ( Mathematics )</p>
            </div>

            <div className='flex flex-col ml-[26vw]'>

                {/* screen headings */}
                <div className='mt-[3rem] ml-[6vw]'>
                    <ul className='flex items-center gap-[5vw] '>
                        <li className='text-[1.7vw] cursor-pointer'
                        onClick={()=>{

                        }}>Study</li>
                        <li className='text-[1.7vw] cursor-pointer'>Quiz</li>
                        <li className='text-[1.7vw] cursor-pointer'>Test</li>
                        <li className='text-[1.7vw] cursor-pointer'>Games</li>
                        <li className='text-[1.7vw] cursor-pointer'>Others</li>
                    </ul>

                </div>

                {/* screen */}
                <div className='screen w-[55vw] h-[30vw] background1 rounded-[29px] mt-[2.5vw] cursor-pointer ' onClick={switchbg}>
                    <div className='flex flex-col '>
                        <div className='flex justify-between'>
                             <div className='ml-[3vw] mt-[3vw]'>
                                <img className='bicon w-[2vw]' src={bicon} alt="" />
                             </div>
                             <div className='mr-[3vw] mt-[3vw]'>
                                 <img className='sicon w-[2vw]' src={sicon} alt="" />
                             </div>
                        </div>
                        <div className='mx-auto my-[7vw]'>
                            <p className='screenText text-white text-[3vw] ' id="">9 + 6 + 7x - 2x - 3</p>
                        </div>
                    </div>
                </div>
                
                {/* screen buttons */}
                <div className='flex gap-[9vw] ml-[3vw] mt-[2vw]'>
                    <img className='w-[2.5vw]' src={restart} alt="" />
                    <div className='flex gap-[6vw]'>
                        <img className='w-[4.5vw]' src={left} alt="" />
                        <p className='text-[2vw] font-bold mt-[1vw]' >01/10</p>
                        <img className="w-[4.5vw]"src={right} alt="" />
                    </div>
                    <img className="w-[2.5vw]" src={fullscreen} alt="" />

                </div>
            </div>
              
              {/* create Flashcard */}
           <div className='flex justify-between mt-[4vw]'>
               <div className='ml-[2vw]'>
                <img className='w-[20vw]' src={logo2} alt="" />
               </div>
               <div className='flex mt-[3vw] mr-[2vw] cursor-pointer '>
                <img className='w-[4vw] h-[4vw] hover:scale-105 '  src={createFlashcard} alt="" />
                <p className='text-[2.3vw] text-blue-900 font-bold ml-[.6vw]'>Create Flashcard</p>
               </div>
           </div>
        </div>
    )
}
