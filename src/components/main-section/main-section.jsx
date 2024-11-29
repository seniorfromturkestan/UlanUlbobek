import React from 'react'
import JasJubai from "../../images/IMG_4825.JPG";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
// import Jas from "../../images/IMG_4830.PNG";

import Jastar from '../../images/toy.png'
import Song from "../../audio/song1.mp3";
import Ofo from "../../images/oform.png";






const MainSection = () => {
   const audioRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false); // Управление состоянием загрузки
 
   useEffect(() => {
     setTimeout(() => {
       setIsLoaded(true); // Устанавливаем анимацию после задержки
     }, 700); // Задержка в 500ms
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
         <div>
               <img src={JasJubai} className="w-full" alt="Main" />
         </div>
         <div
            onClick={handlePlayPause}
            className={'absolute top-[70%] left-10 z-10 flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300'}
         >
            <span className="font-bold font-montserrat text-[#364557]">{isPlaying ? "STOP" : "PLAY"}</span>
            <div className="absolute w-20 h-20 border-2 border-gray-400 rounded-full animate-ping"></div>
         </div>

        
         <img
            src={Jastar} 
            alt="/"
            className={`absolute right-6 w-1/2 top-[55%] z-10 transition-all duration-1000 ease-in-out ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-y-0"
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