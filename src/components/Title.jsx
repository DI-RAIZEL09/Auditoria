// import { useState, useEffect } from 'react';
// import { SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import { ChuzBook } from './UI/ChuzBook';
// import ChuzBookPng from '../assets/img/ChuzBook.png';
// import Poragraff from '../assets/img/Poragraff.png';
// import Group from '../assets/img/Group.png';
// import 'swiper/css/effect-fade';


// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%',
//   height: '100vh',
//   backgroundSize: 'cover',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   backgroundRepeat: 'no-repeat',
// };

// const slideImages = [
//   {
//     url: Group,
//   },
//   {
//     url: 'https://s3-alpha-sig.figma.com/img/8b1b/97b0/98cc8f539b5ed4ce816087827d496e89?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghBKOfZjjKbPlkZBuG-9HuB08OvCIs8gv4PfHlGLdy-z6O-g01g~t0AZ-xKaTrH-1p3nfDaVE1sgDDTqcH1z2Nih9QvZaiccRYBkVDTFF1gOf28GUSJ1acMm-c-5~reiKuLyy9QhdjOvLAea7np4c76qmV3feCAXwkxL0Qrzrfj5uw-ezo6V2R4J5V4-0x5D4tUND0V3peSUwGaYOOHs6xv-FN94meUKYAT0mLLLgv4yfcvrnCvsZnq4MSC5cy29ndTUS5~IWZXai2~dJr0l~lVN7OJLYEgHkHBoDSHGzFjV6-VACAVaQVMkAXsv0b06U0zwW8sg8SjnpcJBnfcp7A__',
//   },
//   {
//     url: 'https://s3-alpha-sig.figma.com/img/6258/f4f8/dcb61ba869da9f9101516f9d2ac44259?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6F0AA50EsGISfp~QCAb5BxAuIyrbfdYcbY6T343f8aPJYq~vCFqnnbaCPYK6ArqTYnz~UkNWRUYd25XFscYEfPQO7aa6EFKT2Szgw5uvybOxYIQTJ4OYHlU89sMxCDG-dpihRRb4jDIsspLZVkq6KPTuXJeqsox8PzoPh0idzmUGf3~qLz~z73DP04bqJXbXHbyDXVgcReTiAo244qhfS6ZJ5K581qeqpkgVvTZy~M37ItNhYIUuK8zPl4hUcPox~GQIZ5m9cZ8YitO39aNBfe8jtBQwgM17lYQ3HRKRZWjdnmUxlG6f~PEB6MvQg7y9HzNVzJO1ub89-SoCvEuzw__',
//   },
// ];

// const Title = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
//     }, 3500);

//     return () => clearInterval(intervalId);
//   }, []);

  

//   return (
//     <>
//     <div>
//     <Swiper
//       slidesPerView={1}
//       navigation={true}

//       modules={[Pagination]}
//       className="mySwiper"
//       effect="fade"
//     >
//         {slideImages.map((image, index) => (
//           <SwiperSlide style={{}} key={index}>
//             <div style={{ ...divStyle, display: 'flex', justifyContent: 'space-around', backgroundImage: `url(${slideImages[currentIndex].url})` }}>
//               <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column' }}>
//                 <img style={{ padding: '10px' }}  src={ChuzBookPng} alt="" />
//                 <img src={Poragraff} alt="" />
//               </div>
//               <ChuzBook>Выбрать книгу</ChuzBook>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//     </div>
//     </>
//   );
// };

// export default Title;


import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ChuzBook } from './UI/ChuzBook';
import ChuzBookPng from '../assets/img/ChuzBook.png';
import Poragraff from '../assets/img/Poragraff.png';
import Group from '../assets/img/Group.png';
import 'swiper/css/effect-fade';
import './Title.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundRepeat: 'no-repeat',
};

const slideImages = [
  {
    url: Group,
    caption: 
    <svg width="74" height="19" viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36.5" cy="9.5" r="9.5" fill="#EC8F32"/>
    <circle cx="68" cy="10" r="6" fill="white"/>
    <circle cx="6" cy="10" r="6" fill="white"/>
    </svg>
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/8b1b/97b0/98cc8f539b5ed4ce816087827d496e89?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghBKOfZjjKbPlkZBuG-9HuB08OvCIs8gv4PfHlGLdy-z6O-g01g~t0AZ-xKaTrH-1p3nfDaVE1sgDDTqcH1z2Nih9QvZaiccRYBkVDTFF1gOf28GUSJ1acMm-c-5~reiKuLyy9QhdjOvLAea7np4c76qmV3feCAXwkxL0Qrzrfj5uw-ezo6V2R4J5V4-0x5D4tUND0V3peSUwGaYOOHs6xv-FN94meUKYAT0mLLLgv4yfcvrnCvsZnq4MSC5cy29ndTUS5~IWZXai2~dJr0l~lVN7OJLYEgHkHBoDSHGzFjV6-VACAVaQVMkAXsv0b06U0zwW8sg8SjnpcJBnfcp7A__',
    caption: 
    <svg width="74" height="19" viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64.5" cy="9.5" r="9.5" fill="#EC8F32"/>
    <circle cx="37" cy="10" r="6" fill="white"/>
    <circle cx="6" cy="10" r="6" fill="white"/>
    </svg>    
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/6258/f4f8/dcb61ba869da9f9101516f9d2ac44259?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6F0AA50EsGISfp~QCAb5BxAuIyrbfdYcbY6T343f8aPJYq~vCFqnnbaCPYK6ArqTYnz~UkNWRUYd25XFscYEfPQO7aa6EFKT2Szgw5uvybOxYIQTJ4OYHlU89sMxCDG-dpihRRb4jDIsspLZVkq6KPTuXJeqsox8PzoPh0idzmUGf3~qLz~z73DP04bqJXbXHbyDXVgcReTiAo244qhfS6ZJ5K581qeqpkgVvTZy~M37ItNhYIUuK8zPl4hUcPox~GQIZ5m9cZ8YitO39aNBfe8jtBQwgM17lYQ3HRKRZWjdnmUxlG6f~PEB6MvQg7y9HzNVzJO1ub89-SoCvEuzw__',
    caption: 
    <svg width="74" height="19" viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9.5" cy="9.5" r="9.5" fill="#EC8F32"/>
    <circle cx="68" cy="10" r="6" fill="white"/>
    <circle cx="37" cy="10" r="6" fill="white"/>
    </svg>
  },
];

const Title = () => {


  return (
    <div className="slide-container">
      <Fade arrows={true}>
         {slideImages.map((slideImages, index) => (
           <div key={index}>
             <div style={{ ...divStyle, display: 'flex', justifyContent: 'space-around',  backgroundImage: `url(${slideImages.url})` }}>
               <div style={{ paddingLeft: '10px', marginTop:'80px', display: 'flex', flexDirection: 'column' }}>
                 <img style={{ padding: '10px' }} src={ChuzBookPng} alt="" />
                 <img style={{ marginLeft: '10px', width:'79%' }} src={Poragraff} alt="" />
                 <h1 style={{margin:'25px 8px'}}>{slideImages.caption}</h1>
               </div>
               <div>
                <ChuzBook>Выбрать книгу</ChuzBook>
               </div>
             </div>
           </div>
         ))}
      </Fade>
    </div>
  )
}
export default Title