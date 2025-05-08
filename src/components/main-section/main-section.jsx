import React from 'react'
import uzatu from "../../images/uzatu.webp";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FaPlay, FaStop } from "react-icons/fa";


import Jastar from '../../images/Феруза.png'
import Jastar2 from '../../images/Қыз ұзату.png'
import Song from "../../audio/song2Kazbek.mp3";
import Ofo from "../../images/oform.png";



const MainSection = () => {
   const audioRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false); 
 
   useEffect(() => {
     setTimeout(() => {
       setIsLoaded(true); 
     }, 700); 
   }, []);
 
   const handlePlayPause = () => {
     if (isPlaying) {
       audioRef.current.pause();
     } else {
       audioRef.current.play();
     }
     setIsPlaying(!isPlaying);
   };
 
  return (
    <section className='relative w-full flex-col flex justify-between'>
         <div className=''>
               <img src={uzatu} className="w-full brightness-90" alt="Main" />
         </div>
         <div
            onClick={handlePlayPause}
            className={'absolute top-[70%] left-10 z-10 flex justify-center items-center w-16 h-16 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300'}
         >
         {isPlaying ? <FaStop className="text-[#364557] text-2xl" /> : <FaPlay className="text-[#364557] text-2xl" />}
         <div className="absolute w-20 h-20 border-2 border-gray-400 rounded-full animate-ping"></div>
         </div>

        
         <img
            src={Jastar2} 
            alt="/"
            className={`absolute left-6 w-4/5 top-[45%] z-10 transition-all duration-1000 ease-in-out ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
         />
         <img
            src={Jastar} 
            alt="/"
            className={`absolute right-6 w-4/5 top-[55%] z-10 transition-all duration-1000 ease-in-out ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
         />

            <img
               src={Ofo}
               alt="/"
               className={`absolute right-0 w-28 top-0 transition-all duration-1000 ease-in-out delay-200 ${
               isLoaded ? "opacity-100 " : "opacity-0"
               }`}
            />
            <img
               src={Ofo}
               alt="/"
               className={`absolute -left-10 w-32 top-96 transition-all duration-1000 ease-in-out delay-400 ${
               isLoaded ? "opacity-100" : "opacity-0 "
               }`}
            />
            <img
               src={Ofo}
               alt="/"
               className={`absolute overflow-hidden -right-0 w-52 top-[70%] transition-all duration-1000 ease-in-out delay-600 ${
               isLoaded ? "opacity-100" : "opacity-0 "
               }`}
            />
               <audio ref={audioRef} src={Song} />

         

        
    </section>
  )
}

export default MainSection