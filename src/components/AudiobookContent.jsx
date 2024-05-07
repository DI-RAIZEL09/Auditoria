import React, { useEffect } from "react";
import styled from "styled-components";
import play from '../assets/icon/playMini.svg';
import block from '../assets/icon/block.svg';
import file from '../assets/icon/file.svg';
import Aos from "aos";

const trackData = [
  {
    id: 1,
    title: "Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3",
    img: play
  },
  {
    id: 2,
    title: "Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3",
    img: play,
    fileIcon: file
  },
  {
    id: 3,
    title: "Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3",
    img: block
  },
];

function AudiobookContent() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Настройте длительность анимации по вашему желанию
  }, []);
  return (
    <BookContent>
      <BookHeader>
        <BookTitle data-aos="fade-up">Содержание книги</BookTitle>
        <BookDuration data-aos="fade-up">18 частей / 23 часа 15 минут</BookDuration>
      </BookHeader>
      {trackData.map((track) => (
        <TrackItem data-aos="fade-up"
           key={track.id}>
          <TrackDetails>
            <TrackImageWrapper>
              <TrackImage src={track.img} alt="Play" />
            </TrackImageWrapper>
            <TrackTitle>{track.title}</TrackTitle>
          </TrackDetails>
          {track.fileIcon && <DownloadIcon src={track.fileIcon} alt="Download" />}
        </TrackItem>
      ))}
    </BookContent>
  );
}

const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 60px;
  width: 80%;
`;

const BookHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const BookTitle = styled.h1`
  color: #fff;
  flex: 1;
  font: 500 30px Ubuntu, sans-serif;
`;

const BookDuration = styled.p`
  color: #5c5e64;
  text-align: right;
  flex: 1;
  font: 400 19px Ubuntu, sans-serif;
`;

const TrackItem = styled.div`
  border-radius: 12px;
  background-color: #151516;
  display: flex;
  margin-top: 24px;
  align-items: center;
  gap: 16px;
  padding: 12px 32px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const TrackImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  fill: #ec8f32;
  overflow: hidden;
  position: relative;
  aspect-ratio: 0.91;
  width: 21px;
  align-items: center;
`;

const TrackImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const TrackTitle = styled.p`
  color: #adadad;
  flex: 1;
  font: 500 14px Ubuntu, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TrackDetails = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const DownloadIcon = styled.img`
  aspect-ratio: 1.28;
  object-fit: auto;
  object-position: center;
  width: 27px;
  stroke-width: 2px;
  stroke: #adadad;
`;

export default AudiobookContent;
