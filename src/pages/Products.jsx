import Card from '../components/UI/Card.jsx';
import jsonData from '../utils/constants.js';
import styled from "styled-components";
import "./Products.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import Filter from "../components/UI/Filter.jsx";
import { Link, Element } from 'react-scroll';

const Products = () => {



    return (
        <Container>
            <Prod className="">
                <TButton>
                    <Type>Новинки </Type>
                    <Button><Link
                        to="filter"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        Смотреть все
                    </Link></Button>
                </TButton>
                    <SlyDiv>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={5}
                            navigation
                            pagination={{clickable: true}}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >

                            {jsonData.slice(0, 20).map((product) => (
                                <SwiperSlide className="" key={product.id}
                                    // правильное использование свойства title
                                             author={product.autor}>
                                    <Card
                                        key={product.id}
                                        img={product.img}
                                        title={product.tittle} // правильное использование свойства title
                                        author={product.autor} // правильное использование свойства author
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SlyDiv>


            </Prod>
            <Prod className="">
                <TButton>
                    <Type>Популярное </Type>
                    <Button><Link
                        to="filter"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        Смотреть все
                    </Link></Button>                </TButton>

                    <SlyDiv>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={5}
                            navigation
                            pagination={{clickable: true}}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >

                            {jsonData.slice(10, 20).map((product) => (
                                <SwiperSlide className="" key={product.id}
                                    // правильное использование свойства title
                                             author={product.autor}>
                                    <Card
                                        key={product.id}
                                        img={product.img}
                                        title={product.tittle} // правильное использование свойства title
                                        author={product.autor} // правильное использование свойства author
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SlyDiv>



            </Prod>
            <Prod className="">
                <TButton>
                    <Type>Выбор редакции </Type>
                    <Button><Link
                        to="filter"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        Смотреть все
                    </Link></Button>                </TButton>

                    <SlyDiv>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={5}
                            navigation
                            pagination={{clickable: true}}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >

                            {jsonData.slice(20, 32).map((product) => (
                                <SwiperSlide className="" key={product.id}
                                    // правильное использование свойства title
                                             author={product.autor}>
                                    <Card
                                        key={product.id}
                                        img={product.img}
                                        title={product.tittle} // правильное использование свойства title
                                        author={product.autor} // правильное использование свойства author
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SlyDiv>

                <Element name="filter">
                    <Filter />
                </Element>
                <Category>
                    <h2>Подборки</h2>
                    <CatImage>
                        <ImgText>
                            <img src="https://s3-alpha-sig.figma.com/img/83e1/cf2c/f5678d6117a30a55b1866fdf32823dbe?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccFAlaTWEhQ~Nh~0a2wLekQ8EIgmO4VrvEFUB6Pc14IX7SHc4wNX15Ac8mvYtSUKcYI~i0iowZ-mPxMwtja9PctloNNSm170WYaVHBeCUnhACwfpc-Y0X2tWhR4iqwyqrlHSlg9CJ6B8JQHP~-vxo4U4AXzKQ6TOQn2klzcUxGYvhgTmM3CEsPT8La2x3BNZ12VwnHyyHfjmZcRvFYfdCUK1T22moMnXFFCFSzKeE0N9hfPHL-NPNN-scPPhSTc5KD5-2H0WFgM0YVvw7hiqaNPg4pIwCR7lxLeK1ep~zUpbyZ0tWeBRx9tTQ6qvqpOvU7ani23I19xsnFEzjUrv1A__" alt="В дороге"/>
                            <p>В дороге</p>
                        </ImgText>
                        <ImgText>
                            <img src="https://s3-alpha-sig.figma.com/img/b8da/ce1a/690e7ed1c0112990a4b6cc123391c2ff?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WFGfj3xG7EZsjm4wUgRTdC5JTcwrd9~o97lSRsLUAsUTIUS5BzgwwZNH1Rzn~Ecp1Mab-hzlCwpWV~QZe380txAdMGPY~K61TcHfIDfWW~2eQBrRU2NZiAn9bPF2zYyHivLP-lRezF5BrFFHsbTIL~Gn2geDi-wTQl9foU45Tkby4RseT59PuQijWOchaoeV7HbaIby-boUJkv4LUqBKMvrM7kMMtsF5mSuwR6MPBKRKULBJBIU~9vJNaUf-C7iQYQPQCIPbXgNyk~w7rzkWUoU03y89rTx-J6TBoEUO--GY7yd1UAsimVLIszJo9nUdvsQhch2CkUVkUzlhGKRWsg__" alt=""/>
                            <p>Для отдыха</p>
                        </ImgText>
                        <ImgText>
                            <img src="https://s3-alpha-sig.figma.com/img/f0a9/6a60/b8179dc8d66fba6447ad1809f9acf539?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvKHjbS3tYHo7L83Ub0O59sG7VsOXxvn2waH2dax7CWG9Iq6wpvvBwQsdAH~6bhkhAbkr2jjzAVnzQnBmmYSu5KOJA9I5JSPWlFdYX2KkTXv-0StKo~HBIpjxnN24Dv2PWxqchJOdap2Ceu8~uQBtDjEh6C~QkUQ~1mYgt-ZVu2Om-ui6E1cn~8Y8NGqB~LsjVo9RsIb4jFQMYwIboiTcZ941PGg-Cy2~HuoORudgRIFD-jP-cjJTzwcaBJgd9dmvNK6iubwwsCT-GVKN4hS8bxpnb1cLSGf38rGKf9kmmiN0b~kOSFE4Br~XZOcVn5RacuFgjAfWYsVgVgnMv0veQ__" alt=""/>
                            <p>Для учебы</p>
                        </ImgText>
                        <ImgText>
                            <img src="https://s3-alpha-sig.figma.com/img/2d99/cdb8/b198045609bd7e2db9fe28965704c44c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adj2K-KiLSWlQBo6tPvjv4k4urgPDTVlmk3fll8N9WzMYWZVZrM04nggOb69vXFBN1YAzHLVeiO~VleYEFPQEdMTtlg2P8mf5g06q4riGxGLwJbNAUY4th521f-DR44y86gbrvRDGJXmfrwCNKSfpclwLQZ1sJZ2qnr9iWH09Ai8SoxRGxxIWMOg-BesrSgAPLXbL7hWAY5n~xspFsc4cwwWBytssQ7qvMtwnKW8dFLW2OIQsAprojpNUBGplkFa6-pTpmTJrwMzgylMBN0cOCQyFYq4apUONoQvlYM7VQbIFhfDQjjuRB1zl7AFBBD39Cz9wddAdcJhPug4dwUB0w__" alt="image"/>
                            <p>Для работы</p>
                        </ImgText>
                    </CatImage>
                </Category>
            </Prod>

        </Container>
    );
};

export default Products;

const Container = styled.div`
    width: 95%;
    max-width: 1440px;
    margin: 0 auto;
    //padding: 0 30px;
    //position: relative;
    //border: 1px solid red;
`

const Type = styled.h1`
   color: #fff;
    font-size: 32px;
    font-weight: 500;
    margin-left: 40px;;
    
`
const Prod = styled.div`
    margin:30px 0 60px 0;
`
const SlyDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 38px ;
`
const Button = styled.button`
    color: #fff;
    font-size:12px ;
    font-weight: 700;
    background: #EC8F32;
    width: 131px;
    height: 36px;
    border-radius: 50px ;
    border: 1px solid #EC8F32;
`

const TButton = styled.div`
display: flex;
    align-items:stretch;
    justify-content: space-between;
    margin-right: 30px;
`

const Category = styled.div`
display: grid;
    grid-column: 4;
    flex-direction: column;
    margin: 60px 0 0 0;
    h2{
        margin-left: 30px;
        margin-bottom: 39px;
        font-size: 32px;
        font-weight: 500;
        color: #fff;
    }
`

const CatImage = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
   
`

const ImgText = styled.div`
   display: flex;
    align-items: center;
    flex-direction: column;
    z-index: -2;
    width: 100%;
    margin-bottom: 40px;
    
    img{
        position: absolute;
        width: 273px;
        height: 163px;
        border-radius: 25px;
        opacity: 0.4;
    }
    p{
        position: relative;
        top: 120px;
        //left: 85%;
        
        right: 30px;
        font-weight: 700;
        font-size: 24px;
        color: #fff;
    }
`