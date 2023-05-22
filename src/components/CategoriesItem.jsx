import styled from "styled-components";
import { mobile } from "./../responsive";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  opacity: 0.8;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h1`
  color: white;
  margin: 20px;
  font-size: 30px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: darkkhaki;
  color: gray;
  cursor: pointer;
  font-weight: bold;
  opacity: 1;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

function CategoriesItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoriesItem;
