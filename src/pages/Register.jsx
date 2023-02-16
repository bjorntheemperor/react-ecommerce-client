import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import {register} from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(204, 185, 87, 0.4), rgba(51, 203, 175, 0.4)), url("https://cdn.getthegloss.com/files/2022/08/9194b7a0-13e3-11ed-b9c3-4b41d4ee9158-What%20is%20retinal%20and%20is%20it%20better%20than%20retinol_.png") center no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
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
  flex-wrap: wrap;
  
`
const Input = styled.input`
 flex: 1;
  min-width: 40%;
  outline: none;
  margin: 20px 10px 0 0;
  padding: 10px;
  ${mobile({
    minWidth: "100%",
  })}
`

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0;

`

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin: 20px 0;

`

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: 2px solid #01ab90;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: .3s;
  &:hover{
    color: white;
    background-color: #01ab90;
  }
  ${mobile({
    width: "100%",
  })}
`


const Register = () => {
    const dispatch = useDispatch()
    // const {isFetching, error} = useSelector(state => state.user)

    let error = useSelector(state => state.user.error)
    let isFetching = useSelector(state => state.user.isFetching)

    console.log(error)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repPassword, setRepPassword] = useState("")

    // const [showError, setShowError] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        let fieldAreNotEmpty = password && repPassword && email && username
        if (fieldAreNotEmpty) {
            if (password === repPassword){
                register(dispatch, {username, email, password})
            } else{

                // setShowError(true)
            }
        } else {
            // setShowError(true)
        }
    }


    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                    <Input required placeholder="Username"
                           onChange={(e)=>{
                               console.log("user "+e.target.value)
                               return setUsername(e.target.value)}}/>
                    <Input required placeholder="Email"
                           onChange={(e)=>{
                                console.log("email "+e.target.value)
                                return setEmail(e.target.value)}}/>
                    <Input required type='password' placeholder="Password"
                           onChange={(e)=>{
                               console.log("pass "+e.target.value)
                               return setPassword(e.target.value)}}/>
                    <Input required type='password' placeholder="Confirm password"
                           onChange={(e)=>{
                               console.log("rep_pass "+e.target.value)
                               return setRepPassword(e.target.value)}}/>
                    <Agreement>
                        By creating and account, I consent to the precessing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
                </Form>
                {error && <Error>An error occurred! Make sure you passed the correct data</Error>}
            </Wrapper>
        </Container>
    );
}

export default Register;