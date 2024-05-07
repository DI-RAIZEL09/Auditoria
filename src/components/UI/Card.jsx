// import React from 'react';
import styled from "styled-components";
import Love from "./Love.jsx";

const Card = (props) => {

    // eslint-disable-next-line react/prop-types
    const { title, author , img } = props; // Получение пропсов из объекта props
    return (
        <Wrapper className="card">

            <CardBody className="card-body">
                    <Img src={img} className="" alt={title}/>

                <AutorLike>
                    <Autor className="card-text"> {author}</Autor>
                    <Love/>
                </AutorLike>
                <Title className="card-title">{title}</Title>
            </CardBody>
        </Wrapper>
    );
};

export default Card;

const Wrapper = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 25px;
`
const Img = styled.img`

    height: 200px;
    width: 200px;
    border-radius: 20px;
    margin-bottom: 10px;
`
const CardBody = styled.div`
    width: 200px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 10px;


`
const AutorLike = styled.div`
    display: flex;
    align-items:center ;
    justify-content: space-between;
    gap: 30px;
    
`
const Autor = styled.p`
color: #ADADAD;
    font-weight: 300;
    //padding-left: 8px;
    width: auto;

`

const Title = styled.h3`
color: #fff;
    font-size: 21px;
    font-weight: 500;
    //padding-left: 8px;
`

