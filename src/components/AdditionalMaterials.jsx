import Aos from "aos";
import * as React from "react";
import styled from "styled-components";

const data = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3b846642bdf7db1d56148d9aef55127a1610cfb7f6829086fa08af93a94f4d1?apiKey=ee5c288f912846c39dbd7e1ea3ac2c47&",
    title: "Постер с героями фильма",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3b846642bdf7db1d56148d9aef55127a1610cfb7f6829086fa08af93a94f4d1?apiKey=ee5c288f912846c39dbd7e1ea3ac2c47&",
    title: "Блокнот с главными героями",
  },
];

function AdditionalMaterials() {
    React.useEffect(() => {
        Aos.init({ duration: 1000 }); // Настройте длительность анимации по вашему желанию
      }, []);
  return (
    <AdditionalMaterialsWrapper data-aos="fade-up">
      <AdditionalMaterialsTitle >Дополнительные материалы</AdditionalMaterialsTitle>
      <AdditionalMaterialsContent>
        {data.map((item, index) => (
          <AdditionalMaterialsItem key={index}>
            <AdditionalMaterialsImage src={item.image} alt={item.title} />
            <AdditionalMaterialsItemTitle>{item.title}</AdditionalMaterialsItemTitle>
          </AdditionalMaterialsItem>
        ))}
      </AdditionalMaterialsContent>
    </AdditionalMaterialsWrapper>
  );
}

const AdditionalMaterialsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
  margin-top: 60px;
`;

const AdditionalMaterialsTitle = styled.h2`
  color: #fff;
  font: 500 32px Ubuntu, sans-serif;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AdditionalMaterialsContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 34px;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
    max-width: 100%;
  }
`;

const AdditionalMaterialsItem = styled.div`
  color: #fff;
  display: flex;
  flex-grow: 1;
  font-size: 21px;
  font-weight: 500;
  gap: 20px;
  line-height: normal;
  width: 40%;

  @media (max-width: 991px) {
    margin-top: 40px;
    width: 100%;
  }
`;

const AdditionalMaterialsImage = styled.img`
  aspect-ratio: 1;
  max-width: 100%;
  object-fit: auto;
  object-position: center;
  width: 112px;
`;

const AdditionalMaterialsItemTitle = styled.p`
  font-family: Ubuntu, sans-serif;
  margin: auto 0;
  width: 200px;
`;

export default AdditionalMaterials;