import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/logo-color.png";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}/* cursor: pointer; */
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 10px;
  transition: 1s;
  &:hover {
    transform: scale(2.5);
  }
  /* margin: 15px; */
  /* font-weight: bold; */
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 25px;
  transition: 0.5s;
  &:hover {
    background-color: yellow;
    transform: scale(1.1);
    border-radius: 10px;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            {/* <input type="text" /> */}
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to="/">
            <Logo src={img} />
          </NavLink>
        </Center>

        <Right>
          <NavLink to="/Register">
            <MenuItem>Register</MenuItem>
          </NavLink>
          <MenuItem>
            <NavLink to="/SIGNIN">SIGN IN</NavLink>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <NavLink to="/Cart">
                <ShoppingCartOutlined color="action" />
              </NavLink>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
