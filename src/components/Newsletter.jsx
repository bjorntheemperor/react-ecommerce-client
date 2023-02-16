import React from 'react';
import {Send} from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";

const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;

  ${mobile({
    fontSize: "46px",
  })}
`
const Description = styled.p`
  font-size: 34px;
  margin-bottom: 20px;

  ${mobile({
    padding: "0 10px",
    fontSize: "20px",
    textAlign: "center"
  })}

`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;

  ${mobile({
    width: "95%",
    margin: "0 auto",
  })}

`
const Input = styled.input`
  flex: 8;
  outline: none;
  padding-left: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;

`
const Button = styled.button`
  flex: 1;
  border: 0;
  color: white;
  background-color: #01ab90;
  cursor: pointer;
  transition: .3s;
  &:hover{
    background-color: black;
  }
`

const Container = styled.div`
  height: 700px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({
    height: "400px",
  })}

`



const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    );
}

export default Newsletter;