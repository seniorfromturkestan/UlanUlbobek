import { useState } from 'react';
import gis from '../../images/2gis.png'
import { useEffect } from 'react';
import Ofo from "../../images/oform.png";
import sagat from "../../images/сағат 19_00-де.png";
import orny from "../../images/Өткізілетін орны.png";

const Time = () => {
    const [isLoaded, setIsLoaded] = useState(false); // Управление состоянием загрузки
 
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true); // Устанавливаем анимацию после задержки
    }, 700); // Задержка в 500ms
  }, []);

 

  return (
    <div >
           <div className='mx-auto -mt-10'>
               
           <h1 className="text-2xl font-black text-center text-[#364557] py-3">ТОЙ УАҚЫТЫ:</h1>
                           <img
                            src={Ofo}
                            alt="/"
                            className={`absolute right-5 w-32 transition-all duration-1000 ease-in-out delay-400 ${
                            isLoaded ? "opacity-100" : "opacity-0 "
                            }`}
                          />
         
            
            <div>
                <img src={sagat} alt="" className='w-64 mx-auto py-3'/>
               
             
            </div>
            <div id="address">
                
                
            </div >
                        <img
                            src={Ofo}
                            alt="/"
                            className={`absolute right-5 w-32 transition-all duration-1000 ease-in-out delay-400 ${
                            isLoaded ? "opacity-100" : "opacity-0 "
                            }`}
                          />
            
                <img src={orny} alt="/" className='w-72 mx-auto py-3'/>
            </div>

            <div className="text-center">
  <h2 className='text-[#364557] font-bold text-3xl mb-2'>Тұран тойханасы</h2>
  <p className='text-[#364557] mb-1'>Тамерлановское шоссе, 2а/3</p>
  <p className='text-[#364557] mb-2'>Шымкент қаласы</p>

  <div className="flex flex-col items-center gap-2">
    <a href="https://go.2gis.com/pb1Pd" className="block">
      <img src={gis} className='w-32 h-auto' alt="2GIS" />
    </a>
    
    <div className="relative overflow-hidden">
                {/* Ссылки (скрытые, но доступные для SEO) */}
                <a 
                    href="https://yandex.kz/maps/org/turan/5966735400/?utm_medium=mapframe&utm_source=maps" 
                    className="sr-only"
                    aria-hidden="true"
                >
                    Туран
                </a>
                <a 
                    href="https://yandex.kz/maps/221/chimkent/category/restaurant/184106394/?utm_medium=mapframe&utm_source=maps" 
                    className="sr-only"
                    aria-hidden="true"
                >
                    Ресторан в Шымкенте
                </a>
                <a 
                    href="https://yandex.kz/maps/221/chimkent/category/banquet_hall/184108315/?utm_medium=mapframe&utm_source=maps" 
                    className="sr-only"
                    aria-hidden="true"
                >
                    Банкетный зал в Шымкенте
                </a>

                {/* Карта */}
                <iframe
                    src="https://yandex.kz/map-widget/v1/?from=mapframe&ll=69.548996%2C42.337174&mode=poi&poi%5Bpoint%5D=69.549071%2C42.337158&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D5966735400&source=mapframe&utm_source=mapframe&z=18.31"
                    width="390"
                    height="400"
                    allowFullScreen
                    className="relative"
                    title="Яндекс Карта - Туран"
                    aria-label="Карта расположения Туран"
                />
                </div>
  </div>
</div>
            

    </div>
  )
}

export default Time 