import styled from "styled-components";
import {NavLink, Route, Routes} from "react-router-dom";
import Blog1 from "../BlogCard/Blog1.jsx";
import Blog2 from "../BlogCard/Blog2.jsx";
import Blog3 from "../BlogCard/Blog3.jsx";


const Filter = () => {
    return (
        <Filterest >
            <Navs>
                <NavLink to="/" >Новинки</NavLink>
                <NavLink to="/Blog2">Популярное</NavLink>
                <NavLink to="/Blog3">Выбор редакции</NavLink>
            </Navs>
            <Routes>
                <Route path='/' element={<Blog1/>}/>
                <Route path='/Blog2' element={<Blog2/>}/>
                <Route path='/Blog3' element={<Blog3/>}/>
            </Routes>
        </Filterest>

    );
};

export default Filter;

const Navs = styled.div`
    display: flex;
    gap: 30px;
    margin-left: 40px;
    margin-bottom: 41px;
    a{
        width: 250px;
      color: #EC8F32;  
        font-weight: 500;
        font-size: 32px;
        text-decoration: underline;
        -ms-underline-position: above;
    }
    a:nth-child(1){
        width: 145px;
    }
    a:nth-child(2){
        width: 195px;
    }
    a:nth-child(3){
        width: 280px;
    }
    a:focus{
    color: #fff;
        text-decoration: none;
}
    
`


const Filterest = styled.div`
    display: flex;
    align-items:start;
    flex-direction: column;
    margin: 90px auto;
`
