import styled from "styled-components";
import { mobile } from "./../responsive";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 225, 225, 0.5),
      rgba(225, 225, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  border-radius: 20px;
  width: 40%;
  padding: 20px;
  background-color: whitesmoke;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  border-radius: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding: 5px;
  transition: 0.8s;
  &:hover {
    background-color: darkgreen;
    transform: scale(1.1);
  }
  margin-bottom: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN NOW</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="Password" />

          <Button>
            <NavLink to="/"> CREATE </NavLink>
          </Button>

          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <NavLink to="/Register">CREATE A NEW ACCOUNT</NavLink>
        </Form>
      </Wrapper>
    </Container>
  );
}
export default Login;
