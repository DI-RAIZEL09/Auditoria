import React, { useEffect } from 'react'
import book from '../assets/img/bookImg.svg'
import nazad from '../assets/icon/Nazad15s.svg'
import vperet from '../assets/icon/Vperet15s.svg'
import start from '../assets/icon/start.svg'
import save from '../assets/icon/save.svg'
import age from '../assets/icon/18+.svg'
import vk from '../assets/icon/vk.svg'
import insta from '../assets/icon/insta.svg'
import facebook from '../assets/icon/facebook.svg'
import  youtube from '../assets/icon/youtube.svg'
import styled from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ChuzBook } from './UI/ChuzBook'


function AboutBook() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Настройте длительность анимации по вашему желанию
  }, []);
  return (
    <div data-aos="fade-up"
     style={{width:'80%', display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'auto', gap:'75px', padding:'150px 0 0 0'}}>
      <AboutBookBlock1>
        <img src={book} alt="book" />
        <PlayBook>
            <span>Слушать фрагмент</span>
          <ListenBlock>
            <img src={nazad} alt="15s" />
            <img src={start} alt="play" />
            <img src={vperet} alt="15s" />
          </ListenBlock>
        </PlayBook>
      </AboutBookBlock1>  

      <AboutBookBlock2 className='2'>
        <BookNameBlock>
          <div style={{width:'75%'}}>
            <BookName>Гарри Поттер и Орден Феникса</BookName>
          </div>
          <SaveAndAgeBlock>
            <img src={age} alt="" />
            <img src={save} alt="" />
          </SaveAndAgeBlock>
        </BookNameBlock>  
        <GradeBlockGl>
          <ListenBookInfoBlock>
            <BookListeninfo>Автор:<BookListeninfoBorder> Маргарет Митчелл, Сандр Бондрос</BookListeninfoBorder></BookListeninfo>
            <BookListeninfo>Читает: <BookListeninfoBorder>Алексей Сквозной</BookListeninfoBorder></BookListeninfo>
          </ListenBookInfoBlock>
          <GradeBlock>
            <div>
              <GradeH2>5,7</GradeH2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <Rating>Рейтинг аудитерии</Rating>
              <Grades>35 784 оценок</Grades>
            </div>
          </GradeBlock>
        </GradeBlockGl>


          <AboutBooksTextBlock >
            <AboutBooks >До рождения Гарри в 1980 году провидица Сивилла Трелони произнесла в беседе с главой Хогвартса Дамблдором пророчество о том, что в конце июля родится мальчик, родители которого три раза бросали вызов вступившему на путь зла бывшему ученику Хогвартса Волан-де-Морту, и который или сможет победить Тёмного Лорда, или погибнет от его рук. Под условия пророчества подходили Гарри Поттер и родившийся на день раньше сын мракоборцев Фрэнка и Алисы Невилл Долгопупс. Лорд Волан-де-Морт, узнав о пророчестве</AboutBooks>
            <NextText >
              <Grades style={{borderBottom:'0.5px solid #ADADAD', color:'#ADADAD'}}>Развернуть </Grades>
            </NextText>
          </AboutBooksTextBlock>


          <NetWork>
            <img title='Vk' src={vk} alt="" />
            <img title='instagram' src={insta} alt="" />
            <img title='FaceBook' src={facebook} alt="" />
            <img title='YouTube' src={youtube} alt="" />
          </NetWork>

          <ButtonBlock>
            <BuyBookButton >Купить за 199 руб.</BuyBookButton>
            <SendToWork>Отправить на рабочий стол</SendToWork>
          </ButtonBlock>
      </AboutBookBlock2>  
    </div>
  )
}

export default AboutBook

const SendToWork = styled.button`
  width: 226px;
  height: 42px;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0);
  color: #EC8F32;
  font-size: 10px;
  padding: 0;
  border: 2px solid #EC8F32;
`
const BuyBookButton = styled.button`
  width: 285px;
  height: 60px;
  border-radius: 70px;
  background-color: #EC8F32;
  color: white;
  font-size: 21px;
`
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`
const AboutBookBlock2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`
const NetWork = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 140px;
  align-items: center;
`
const NextText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  margin-top: 10px;
`
const AboutBooksTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const AboutBooks = styled.span`
  color: white;
  font-size: 12px;
`

const GradeH2 = styled.h2`
  color: #EC8F32;
  font-size: 38px;
`
const GradeBlockGl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 0 0 0;
`
const GradeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 170px;
`
const Rating = styled.span`
  color: white;
  font-size: 11px;
  font-weight: 600;
`
const Grades = styled.span`
  color: white;
  font-size: 12px;
`
const SaveAndAgeBlock = styled.span`
  width: 80px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`
const BookNameBlock = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`

const BookListeninfo = styled.span`
  font-size: 14px;
  color: white;
  color: #ADADAD;
  margin-top: 5px;
  font-weight: 400;
`
const BookListeninfoBorder = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 400;
  color: #ADADAD;
  cursor: pointer;
  border-bottom: 0.5px solid #ADADAD;
`
const BookName = styled.span`
  font-size: 38px;
  color: white;
  font-weight: 700;
`

const ListenBookInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ListenBlock = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const PlayBook = styled.div`
  background-color: #151516;
  color: #ADADAD;
  width: 410px;
  height: 60px;
  align-items: center;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 14px;
`
const AboutBookBlock1 = styled.div`
  width: 410px;
`