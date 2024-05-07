// import Card from '../components/UI/Card.jsx';
// import jsonData from '../utils/constants.js';
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "./Products.css"
//
//
//
//
//
// const Productar = () => {
//
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         arrows: false
//     };
//
//     return (
//         <Container>
//             <Prod className="">
//                 <Type>Новинки </Type>
//
//                 <Slider {...settings}>
//                 {/**/}
//                 {jsonData.slice(1, 8).map((product) => (
//                         <Card
//                             key={product.id}
//                             img={product.img}
//                             title={product.tittle} // правильное использование свойства title
//                             author={product.autor} // правильное использование свойства author
//                         />
//                     ))}
//                 </Slider>
//
//
//             </Prod>
//             <Prod className="">
//                 <Type>Популярное </Type>
//                 <Slider {...settings}>
//
//                     {jsonData.slice(1, 8).map((product) => (
//                         <Card
//                             key={product.id}
//                             img={product.img}
//                             title={product.tittle} // правильное использование свойства title
//                             author={product.autor} // правильное использование свойства author
//                         />
//                     ))}
//                 </Slider>
//             </Prod>
//             <Prod className="">
//                 <Type>Выбор редакции </Type>
//                 <Slider {...settings}>
//
//                     {jsonData.slice(1, 8).map((product) => (
//                         <Card
//                             key={product.id}
//                             img={product.img}
//                             title={product.tittle} // правильное использование свойства title
//                             author={product.autor} // правильное использование свойства author
//                         />
//                     ))}
//                 </Slider>
//             </Prod>
//
//         </Container>
//     );
// };
//
// export default Productar;
//
// const Container = styled.div`
//     width: 90%;
//     max-width: 1440px;
//     margin: 0 auto;
// `
// const Type = styled.h1`
//    color: #fff;
//     font-size: 32px;
//     font-weight: 500;
//     margin-left: 30px;
//
// `
// const Prod = styled.div`
//     margin: 30px 0;
// `
