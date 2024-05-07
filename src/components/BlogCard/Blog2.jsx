import jsonData from "../../utils/constants.js";
import Card from "../UI/Card.jsx";
import styled from "styled-components";

const Blog2 = () => {
    return (
        <Flex>
            {jsonData.slice(10, 20).map((product) => (

                    <Card
                        key={product.id}
                        img={product.img}
                        title={product.tittle} // правильное использование свойства title
                        author={product.autor} // правильное использование свойства author
                    />
            ))}
        </Flex>
    );
};

export default Blog2;

const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr) ;
    align-items: center;
        justify-content: space-around;
    width: 100%;
    margin: 0 auto;
`