import { useEffect, useState } from 'react';
import otbs from '../../images/foot.png'
import tlgrm from '../../images/teelegrm.png'

const Footer = () => {
  const targetDate = new Date('2024-12-03T19:00:00'); // Дата свадьбы

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


            <div className='mt-[10%] mb-[5%] text-[#364557]'>
                <p className='text-center text-lg font-montserrat'>Құрметті қонақтар, <strong>той фотоларын</strong> <br />төмендегі каналдан ала аласыздар!</p>
                <a href="https://t.me/+LcEKaHyYI-VhYTYy">
                  <button  className='mt-5 mx-auto flex items-center font-bold text-2xl  p-2 px-8 space-x-2 rounded-full bg-[#364557] text-white'>
                    <span>Каналға өту</span> 
                      <img src={tlgrm} width="50px" alt="/" />

                  </button>
                </a>
            </div>    

            <div className="text-center p-6 text-[#364557] max-w-sm mx-auto">
            <p className="text-2xl font-semibold mb-4">Тойға дейін:</p>
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




        <img src={otbs} alt="/"  width="100%"/>


    </div>
    
  )
}

export default Footer