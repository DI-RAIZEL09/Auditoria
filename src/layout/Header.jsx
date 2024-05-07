import React, { useState } from 'react'
import logo from '../assets/img/logo.svg'
import styled, { keyframes } from 'styled-components'
import { SearchOutlined } from '@ant-design/icons';

function Header() {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  }

  return (
    <HeaderStyled >
        <HeaderGlobalBlock>
            <div>
                <img src={logo} alt="" />
            </div>
            <NavStyle>
                <NavBar visible={!searchVisible}>
                    <li>Как купить</li>
                    <li>F.A.Q</li>
                    <li> Контакты</li>
                </NavBar>
                <SearchContainer visible={searchVisible}>
                    <Input type="text" placeholder='Название книги которую ищите' visible={searchVisible}/>
                    <StyledSearchOutlined onClick={handleSearchClick} style={{ fontSize: '21px', color: 'white' }} />
                </SearchContainer>
            </NavStyle>
            <ButtonBlock>
                <ButtonRegStyle>Регистрация</ButtonRegStyle>
                <ButtonStyle>Войти</ButtonStyle>
            </ButtonBlock>
        </HeaderGlobalBlock>
    </HeaderStyled>
  )
}

export default Header

const HeaderGlobalBlock = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;

`
const ButtonBlock = styled.div`
  width: 281px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const ButtonStyle = styled.button`
  background-color: #EC8F32;
  border: 1px solid black;
  color: white;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103px;
  cursor: pointer;
  height: 39px;
`
const ButtonRegStyle = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  width: 158px;
    height: 39px;
    transition:  0.3s ease;
    &:hover {
        border-color: #EC8F32;
        color: #EC8F32;
        transition:  0.3s ease;

  }

`
const HeaderStyled = styled.header`
  background-color: rgba(0, 0, 0, 0.92);
  height: 126px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  margin-bottom: 126px;
`
const NavStyle = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    transition: width 0.7s ease;

`
const Input = styled.input`
    width: ${props => props.visible ? '80%' : '0'};
    background-color: transparent;
    border: none;
    color: transparent;
    color: white;
    outline: 0;
    transition: width 0.7s ease;
    &::placeholder {
      color: white; /* Цвет placeholder */
    }
`
const NavBar = styled.ul`
  color: white;
  list-style: none;
  display: ${props => props.visible ? 'flex' : 'none'};
  /* opacity: ${props => props.visible ? 0 : 1};; */
  gap: 80px;
  transition: width 0.7s ease;

  font-size: 15px;
  font-weight: 600;
  
  li {
    position: relative;
    cursor: pointer;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -2px; /* Отступ нижней линии от текста */
      left: 0;
      width: 100%;
          height: 1px; /* Толщина линии */
          background-color: white;
          opacity: 1; /* Начальное состояние линии (невидимое) */
        }
        
        &:hover {
          &:after {
            opacity: 0; /* Линия становится видимой при наведении */
          }
        }
    }
`

const SearchContainer = styled.div`
  padding: 10px 11px;
  border-radius: 50px;
  border: ${props => props.visible ? '1px solid white' : 'none'};
  width: ${props => props.visible ? '450px' : '0'};
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: width 1.3s ease;
`

const StyledSearchOutlined = styled(SearchOutlined)`
  color: white;
  font-size: 21px;
  cursor: pointer;
  transition: width 0.7s ease;

`
