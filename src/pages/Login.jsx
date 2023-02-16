import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import {login} from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(204, 87, 132, 0.4), rgba(119, 203, 51, 0.4)), url("https://pop-culturalist.com/wp-content/uploads/2022/07/taylor-hickson-motherland-fort-salem-season-3-pop-culturalist-1024x579.jpg") center no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({
    width: "95%",
  })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({
    textAlign: "center",
  })}
`
const Form = styled.form`
  display: flex;
  flex-direction: column;

  
`
const Input = styled.input`
  width: 100%;
  outline: none;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: 2px solid #01ab90;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: .3s;
  margin: 10px 0;
  &:hover{
    color: white;
    background-color: #01ab90;
    
  }
  &:disabled{
    opacity: .5;
    cursor: not-allowed;
  }
  ${mobile({
    width: "100%",
  })}

`

const LinkWrapper = styled.div`
  margin: 10px 0;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({
    margin: "10px auto",
  })}
`

const Error = styled.div`
  color: red;
  line-height: 22px;
  margin: 10px 0;
`


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    // const {isFetching, error} = useSelector(state => state.user)
    let error = useSelector(state => state.user.error)
    let isFetching = useSelector(state => state.user.isFetching)
    // console.log(error)
    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }

    useEffect(()=>{

    }, [])

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username"
                           onChange={(e)=>setUsername(e.target.value)}
                    />
                    <Input placeholder="Password" type="password"
                           onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Error occurred! Check if you passed the right data</Error>}
                    {/*<Link>FORGOT YOUR PASSWORD?</Link>*/}
                    <LinkWrapper>
                        <Link to="/register">CREATE A NEW ACCOUNT</Link>
                    </LinkWrapper>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;