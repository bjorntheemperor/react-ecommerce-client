import React from 'react';
import styled from "styled-components";
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: .5s;
  opacity: 0;
  ${mobile({
    width: "140px",
    height: "150px",
    bottom: "0",
    right: "0",
    margin: "auto",
    justifyContent: "space-between"
  })}
`
const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #01ab90, #d4ff54);
  transition: .3s;
  opacity: 0;
  ${mobile({
    width: "150px",
    height: "150px"
  })}
`

const Container = styled.div`
  position: relative;
  background-color: transparent;
  max-height: 300px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  &:hover ${Info}{
    opacity: 1;
  }
  &:hover ${Circle} {
    opacity: .8;
  }
`


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  
`

const Icon = styled.div`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: white;
  display: grid;
  place-items: center;
  margin: 10px;
  transition: .3s;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
  ${mobile({
    margin: "0",
  })}
`



const Product = ({item}) => {
    return (
        <Container>
            <Circle></Circle>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    );
}

export default Product;