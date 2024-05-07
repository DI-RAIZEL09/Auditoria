import styled from "styled-components";
import one from '../assets/icon/one.svg'
import two from '../assets/icon/two.svg'
import playBook from '../assets/img/bookPlay.svg'
import { useEffect } from "react";
import Aos from "aos";

const reviews = [
  {
    id: 1,
    date: "16 июля 2022",
    content:
      "Идея этой доброй семейной комедии родилась весной 2019 года, когда актер, режиссёр и сценарист Кирилл Плетнёв представил кинокомпании «Окапи продакшн» сценарий МОЙ ПАПА – ВОЖДЬ.",
  },
  {
    id: 2,
    date: "12 июля 2022",
    content:
      "Идея этой доброй семейной комедии родилась весной 2019 года, когда актер, режиссёр и сценарист Кирилл Плетнёв представил кинокомпании «Окапи продакшн» сценарий МОЙ ПАПА – ВОЖДЬ. Необычность и небанальность предложенного материала произвела впечатление на продюсеров, поэтому решение взять проект в производство было принято немедленно.",
  },
  {
    id: 3,
    date: "8 июля 2022",
    content:
      "Идея этой доброй семейной комедии родилась весной 2019 года, когда актер, режиссёр и сценарист Кирилл Плетнёв представил кинокомпании «Окапи продакшн» сценарий МОЙ ПАПА – ВОЖДЬ. Необычность и небанальность предложенного материала произвела впечатление.",
  },
];

function Grade() {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Настройте длительность анимации по вашему желанию
      }, []);
  return (
    <ReviewsSection>
      <ReviewsTitle data-aos="fade-up">Отзывы / Рецензии</ReviewsTitle>
      <ReviewsContainer>
        <ReviewsList>
          {reviews.map((review) => (
            <ReviewItem data-aos="fade-up" key={review.id}>
              <ReviewHeader>
                <ReviewDate>{review.date}</ReviewDate>
                <RatingStars>
                  <RatingStar src={one} alt="Rating star" />
                  <RatingStarWrapper>
                    <img src={one} alt="Rating star" />
                  </RatingStarWrapper>
                  <RatingStarWrapper>
                    <img src={two} alt="" />
                  </RatingStarWrapper>
                  <RatingStarWrapper>
                  <img src={two} alt="" />
                  </RatingStarWrapper>
                  <RatingStarWrapper>
                  <img src={two} alt="" />
                  </RatingStarWrapper>
                </RatingStars>
              </ReviewHeader>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewsList>
      </ReviewsContainer>
      <AuthorSection data-aos="fade-up">
        Об авторе <AuthorLink>Факты о книге</AuthorLink>
      </AuthorSection>
      <AuthorInfoContainer data-aos="fade-up">
        <AuthorImageWrapper>
          <AuthorImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d1478effa0532482f64e8f5964d1001c7353ce0121c74c21792ce20d7255fe1?apiKey=ee5c288f912846c39dbd7e1ea3ac2c47&" alt="Author" />
        </AuthorImageWrapper>
        <AuthorDetails>
          <AuthorName>Джефф Линдсей</AuthorName>
          <AuthorBio>
            Идея этой доброй семейной комедии родилась весной 2019 года, когда
            актер, режиссёр и сценарист Кирилл Плетнёв представил кинокомпании
            «Окапи продакшн» сценарий МОЙ ПАПА – ВОЖДЬ. Необычность и
            небанальность предложенного материала произвела впечатление на
            продюсеров, поэтому решение взять проект в производство было принято
            немедленно.
            <br />И уже 30 апреля 2019 года кинокомпания «Окапи продакшн» и
            «Русское радио» объявили.
          </AuthorBio>
        </AuthorDetails>
      </AuthorInfoContainer>
      <BookSection data-aos="fade-up">
        <BookImageWrapper>
          <BookImageContainer>
            <img src={playBook} alt="Book cover" />
          </BookImageContainer>
        </BookImageWrapper>
        <BookDetails>
          <BookTitle>«Линкольн» для адвоката</BookTitle>
          <BookDescription>
            Даже полтора часа в день (в среднем столько занимает время на дорогу
            в мегаполисе на работу и домой), посвященных{" "}
          </BookDescription>
          <BookAuthor>Джефф Линдсей</BookAuthor>
        </BookDetails>
        <BookPurchase>
          <PurchaseButton>Купить за 199 руб.</PurchaseButton>
        </BookPurchase>
      </BookSection>
    </ReviewsSection>
  );
}
export default Grade


const ReviewsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 80%;
  margin: auto;
  margin-top: 80px;
`;

const ReviewsTitle = styled.h2`
  color: #fff;
  width: 100%;
  font: 500 32px Ubuntu, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ReviewsContainer = styled.div`
  margin-top: 29px;
  width: 100%;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ReviewsList = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ReviewItem = styled.article`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  padding: 35px 29px;
  width: 33%;
  height: fit-content;
  
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
    width: 100%;
  }
`;

const ReviewHeader = styled.header`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const ReviewDate = styled.time`
  color: #adadad;
  font: 300 14px Ubuntu, sans-serif;
`;

const RatingStars = styled.div`
  display: flex;
  gap: 2px;
  flex: 1;
`;

const RatingStar = styled.img`
  aspect-ratio: 1.18;
  object-fit: auto;
  object-position: center;
  width: 13px;
  stroke-width: 1px;
  stroke: #ec8f32;
  /* border: 1px solid rgba(236, 143, 50, 1); */
`;

const RatingStarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  stroke-width: 1px;
  stroke: #ec8f32;
  overflow: hidden;
  /* border: 1px solid rgba(236, 143, 50, 1); */
  position: relative;
  aspect-ratio: 1.18;
  width: 13px;
  align-items: center;
  justify-content: center;
`;

const RatingStarImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const RatingStarOverlay = styled.img`
  aspect-ratio: 1.18;
  object-fit: auto;
  object-position: center;
  width: 100%;
  stroke-width: 1px;
  stroke: #ec8f32;
`;

const RatingStarIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
  fill: #ec8f32;
`;

const ReviewContent = styled.p`
  color: #fff;
  margin-top: 24px;
  font: 300 14px/23px Ubuntu, sans-serif;
`;

const AuthorSection = styled.section`
  color: #ec8f32;
  text-decoration-line: underline;
  margin-top: 89px;
  width: 100%;
  font: 500 32px Ubuntu, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const AuthorLink = styled.span`
  text-decoration: underline;
  color: rgba(236, 143, 50, 1);
`;

const AuthorInfoContainer = styled.div`
  margin-top: 42px;
  width: 100%;
  display: flex;
  gap: 20px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const AuthorImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: 0;
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const AuthorImage = styled.img`
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  width: 197px;
  height: 197px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 991px) {
    margin-top: 33px;
  }
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 83%;
  margin-left: 20px;
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const AuthorName = styled.h3`
  background: linear-gradient(
    266deg,
    #fff 29.05%,
    rgba(255, 255, 255, 0.28) 114.96%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 700 26px/231% Ubuntu, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AuthorBio = styled.p`
  color: #fff;
  margin-top: 14px;
  font: 300 15px/21px Ubuntu, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BookSection = styled.section`
  border-radius: 25px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin-top: 198px;
  width: 100%;
  display: flex;
  gap: 20px;
  height: 190px;
  display: flex;
  align-items: center;
  flex-direction: row;
  
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 40px;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const BookImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0;
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const BookImageContainer = styled.div`
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  margin-top: -23px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 100%;
  
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const BookImageBackground = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const BookImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 94px;
  margin-top: 9px;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 51%;
  margin-left: 20px;
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const BookTitle = styled.h3`
  background: linear-gradient(
    266deg,
    #fff 29.05%,
    rgba(255, 255, 255, 0.28) 114.96%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 700 32px/187.5% Ubuntu, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BookDescription = styled.p`
  color: #fff;
  margin-top: 13px;
  font: 17px/21px Ubuntu, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BookAuthor = styled.p`
  color: #adadad;
  margin-top: 14px;
  font: 16px Ubuntu, sans-serif;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BookPurchase = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 20px;
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PurchaseButton = styled.button`
    width: 235px;
    height: 64px;
    background-color: #EC8F32;
    color: white;
    padding: 0;
    border-radius: 64px;
`