import React from 'react';

import styled from "styled-components";
import {Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter} from "@mui/icons-material";
import {mobile} from "../responsive";

const Left = styled.div`
  flex: 1;
  padding: 50px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile({
    alignItems: "center",
  })}

`
const Logo = styled.h1`
  font-weight: bold;
  border: 10px solid #00d0b0;
  min-width: 220px;
  width: 0;
  text-align: center;
  padding: 3px 5px 10px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  color: #000;
  margin-bottom: 20px;
`

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  ${mobile({
    textAlign: "center",
  })}


`
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`
const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.bg};
  color: white;
  display: grid;
  place-items: center;
  border-radius: 50%;
`

const Center = styled.div`
  flex: 1;
  padding: 50px 20px 20px;
`

const Title = styled.h2`
  margin-bottom: 20px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const ListItem = styled.li`
  
`


const Right = styled.div`
  flex: 1;
  padding: 50px 20px 20px;
`
const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`
const Payment = styled.img`
  
  max-width: 400px;

  ${mobile({
    maxWidth: "95%",
  })}

`


const Container = styled.footer`
  display: flex;

  ${mobile({
    flexDirection: "column",
  })}

`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Ko&ko</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsim available, but
                    the majorityy have suffered alteration in some form, by injected
                    humour or randomised words which don't look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon bg="#3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="#e4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="#55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg="#0a66c2">
                        <LinkedIn />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Shipping</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>320 Allison Dale, New Marietta
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>+48 510 740 817
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>erasusdk@gmail.com
                </ContactItem>
                <Payment src="https://www.savinga.com/img/paypal.png"/>
            </Right>
        </Container>
    );
}

export default Footer;