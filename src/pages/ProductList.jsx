import styled from "styled-components";
import Navbar from "./../components/Navbar";
import Announcment from "./../components/Announcment";
import Products from "./../components/Products";
import Newsletter from "./../components/Newsletter";
import Footer from "./../components/Footer";
import { mobile } from "./../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FillterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px " })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title>Dresses</Title>
      <FilterContainar>
        <Filter>
          <FillterText>Filter Products: </FillterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FillterText>Sort Products: </FillterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainar>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
