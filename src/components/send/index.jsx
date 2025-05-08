import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa"; // Установка: npm install react-icons
import Ofo from "../../images/oform.png";
import kurmetti from "../../images/Құрметті қонақтар.png"
import toikun from "../../images/Той күні.png"
import toikun2 from "../../images/14 маусым 2025.png"



const WeddingInvitation = () => {
  const daysInWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const year = 2024;
  const month = 10; 
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Воскресенье = 0
  const adjustedFirstDay = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth + 1); // 
  const daysInMonth = new Date(year, month + 1, 30).getDate();
  const [isLoaded, setIsLoaded] = useState(false); // Управление состоянием загрузки
 
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true); // Устанавливаем анимацию после задержки
    }, 700); // Задержка в 500ms
  }, []);

  return (

    
      <div className='mt-10 relative' id="invite">
                  <div className="text-center" >
                    <div className='mx-auto' >
                      <img
                        src={kurmetti}
                        alt="/"
                        className='px-4'
                        
                        
                      />
                    </div>


                        <p  className="text-lg my-6 px-4 uppercase font-bold text-[#364557]">
                        Сіздерді қызымыз <b>Ферузаның</b> қыз ұзату тойына арналған ақ дастарханымыздың қонағы болуына шақырамыз
                        </p>

                        <p className="text-lg font-bold my-6 text-[#364557]">
                          Бақыт қонып ақ отау түңдігіне, <br />
                          Тағы да сезім нұры күлді, міне. <br />
                          Қол ұстасты жұбайлар салтанатпен <br />
                          Жарастығы сай келіп бір - біріне.
                        </p>
                        <img
                        src={Ofo}
                        alt="/"
                        className={`absolute -left-10 w-32 top-96 transition-all duration-1000 ease-in-out delay-400 ${
                        isLoaded ? "opacity-100" : "opacity-0 "
                        }`}
                        />

                        <img src={toikun} alt="" className='px-32' />
                          <div className='items-center justify-center'>
                            <img src={toikun2} alt="" className='w-4/6 py-3 mx-auto animate-pulseGrow' />
                          </div>
                          <img
                            src={Ofo}
                            alt="/"
                            className={`absolute -left-10 w-32 top-50 transition-all duration-1000 ease-in-out delay-400 ${
                            isLoaded ? "opacity-100" : "opacity-0 "
                            }`}
                          />

                        <div className="grid grid-cols-7 gap-1 font-black mx-10  text-center my-6 text-[#364557]">
                            {daysInWeek.map((day, index) => (
                              <div key={index} className="text-md font-bold text-gray-700 ">
                                {day}
                              </div>
                            ))}

                            {Array(adjustedFirstDay)
                              .fill(null)
                              .map((_, index) => (
                                <div key={`empty-${index}`} className="text-md  text-gray-300"></div>
                              ))}

                            {Array(daysInMonth)
                              .fill(null)
                              .map((_, index) => (
                                <div
                                  key={index}
                                  className="relative flex items-center justify-center p-2 rounded-full"
                                >
                                  <span className={`z-10 ${index + 1 === 3 ? "font-bold" : ""}`}>
                                    {index + 1}
                                  </span>

                                  {index + 1 === 14 && (
                                    <FaHeart className="absolute text-red-300 text-3xl animate-ping" />
                                  )}
                                </div>
                              ))}
                          </div>

                
                  </div>
      </div>
 
  );
};

export default WeddingInvitation;
