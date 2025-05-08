import { useEffect, useState } from 'react';
import tlgm from '../../images/teelegrm.png'
import toigadein from '../../images/toigadein.png'
import toiyeleri from '../../images/kurmetpepn.png'
import toigu from '../../images/seitmanshyk.png'

const Footer = () => {
  const targetDate = new Date('2025-06-14T19:00:00');

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  },);
  return (
    <div id="photos">

          <div className="flex flex-col items-center mt-8 space-y-4">
          <p className="text-center font-semibold max-w-sm px-4 uppercase">
            Құрметті қонақтар, <span >той фотоларын</span>  төмендегі каналдан ала аласыздар!
            </p>
            <a 
              href="https://t.me/your_telegram_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 text-white rounded-lg shadow-md"
            >
              <img 
                src={tlgm} 
                alt="Telegram" 
                className="w-6 h-6 mr-2" 
              />
              <span className='text-black font-bold'>Telegram-ға өту</span>
            </a>

            
          </div>

            <div className="text-center p-6 text-[#364557] max-w-sm mx-auto">
              <img src={toigadein} alt="/"  className='w-52 mx-auto my-4'/>
            <div className="flex justify-center space-x-6 text-[#364557]">
              <div className="time-part text-[#364557]">
                <p className="text-4xl font-bold text-[#364557]">{timeLeft.days}</p>
                <p className="text-sm text-[#364557]">күн</p>
              </div>
              <div className="time-part">
                <p className="text-4xl font-bold text-[#364557]">{timeLeft.hours}</p>
                <p className="text-sm text-[#364557]">сағат</p>
              </div>
              <div className="time-part">
                <p className="text-4xl font-bold text-[#364557]">{timeLeft.minutes}</p>
                <p className="text-sm text-[#364557]">минут</p>
              </div>
              <div className="time-part">
                <p className="text-4xl font-bold text-[#364557]">{timeLeft.seconds}</p>
                <p className="text-sm text-[#364557]">секунд</p>
              </div>
            </div>
            
          </div>
            <img src={toiyeleri} alt="" className='w-72 mx-auto'/>
            <img src={toigu} alt="" className='w-72 mx-auto mb-20' />







    


    </div>
    
  )
}

export default Footer