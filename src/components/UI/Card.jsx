import  { useState } from 'react';
import styled from "styled-components";
import Love from "./Love.jsx";
import Play from "../../assets/svg/play.jsx";
import Pause from "../../assets/svg/Pause.jsx";
import sound from "../../assets/svg/kzapadu.mp3";

const Card = (props) => {
    // eslint-disable-next-line react/prop-types
    const { title, author, img } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    let audio;
    function playWithPause(sound, pauseDuration) {
        audio = new Audio(sound);
        audio.play();
        setIsPlaying(true);
        setTimeout(function() {
            audio.pause();
            setIsPlaying(false);
        }, pauseDuration);
    }

    return (
        <Wrapper className="card">
            <CardBody className="card-body">
                <Img src={img} className="" alt={title} />
                <AutorLike>
                    <Autor className="card-text"> {author}</Autor>
                    <Love />
                </AutorLike>
                <Title className="card-title">{title}</Title>
            </CardBody>
            <BT onClick={() => playWithPause(sound, 10000)}>
                {isPlaying ? <Pause /> : <Play />}
            </BT>
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

const BT = styled.button`
    position: relative;
    background: none;
    border: none;
    display: none;
    top: -85%;
    right: -22%;
    ${Wrapper}:hover & {
        display: block;
    }
`;

const AutorLike = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

const Autor = styled.p`
    color: #ADADAD;
    font-weight: 300;
    width: auto;
`

const Title = styled.h3`
    color: #fff;
    font-size: 21px;
    font-weight: 500;
`
