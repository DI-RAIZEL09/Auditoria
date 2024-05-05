import React from 'react'
import logo from '../assets/img/footerLogo.svg'
import styled from 'styled-components'
import visa from '../assets/icon/Visa.svg'
function Footer() {
  return (
    <footer style={{borderTop:'1px solid #413C3C', padding:'50px 0 0 0'}}>
      <FooterCatygory>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <CategoryBlock>
            

            <DS>
                <Gl>Жанры</Gl>
                    <Span>Нонфикшн</Span>
                    <Span>Псиология</Span>
                    <Span>Бизнес</Span>
                    <Span>Финансы</Span>
                    <Span>Все жанры</Span>
            </DS>
            <DS>
                <Gl>Категории</Gl>
                    <Span>Популярное</Span>
                    <Span>Новинки</Span>
                    <Span>Выбор редакции</Span>
            </DS>
            <DS>
                <Gl>Разделы</Gl>
                    <Span>Как купить</Span>
                    <Span>Часто задаваемые вопросы</Span>
                    <Span>Сотрудничество</Span>
                    <Span>Контакты</Span>
            </DS>
        </CategoryBlock>
      </FooterCatygory>
            <FooterAboutBlock>
      <FooterBlock2>
                <FooterAbout>
                    <span style={{fontSize:'11px', color:'#ADADAD', }}>© 2022, «Аудитерия». Все права защищены.</span>
                    <Span2>Политика конфиденциальности</Span2>
                    <Span2>Лицензионное соглашение</Span2>
                </FooterAbout>
                <div>
                    <img src={visa} alt="visa" />
                </div>
      </FooterBlock2>
            </FooterAboutBlock>
    </footer>
  )
}

export default Footer


const FooterBlock2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    flex-direction: row;
    margin: auto;

`
const FooterAbout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 62%;
    align-items: center;
    flex-direction: row;

`
const FooterAboutBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 80px;
    border-top: 1px solid #ADADAD;
    margin-top: 50px;

`
const FooterCatygory = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: auto;

`
const CategoryBlock = styled.h2`
    width: 48%;
    display: flex;
    justify-content: space-between;
`
const Gl = styled.h2`
    font-size: 19px;
    color: #D9D9D9;
`
const Span2 = styled.span`
    font-size: 11px;
    border-bottom: 0.5px solid #ADADAD;
    font-weight: 500;
    color: #ADADAD;
    cursor: pointer;
`
const Span = styled.span`
    font-size: 11px;
    margin-top: 10px;
    border-bottom: 0.5px solid #ADADAD;
    font-weight: 500;
    cursor: pointer;
    color: #ADADAD;
`
const DS = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    align-items: start;
    text-align: start;
    padding: 0;
`
