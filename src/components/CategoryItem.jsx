import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 3s ease;
  ${mobile({
    objectPosition: "top",
  })}
`
const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 900px;
  position: relative;
  overflow: hidden;
  &:hover ${Image}{
    transform: scale(1.3);
  }
  ${mobile({
    height: "200px",
  })}
`

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  color: white;
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 10px black;
  ${mobile({
    fontSize: "36px",
  })}
`

const Button = styled.button`
  padding: 20px 50px;
  background: rgba(1, 171, 144, 0.35);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  transition: .3s;
  //box-shadow: inset 20px 0 0 rgba(0,0,0,1);
  appearance: none;
  border: 0;

  --valP: 4px;
  --valN: -4px;
  --valIP: 60px;
  --valIN: -60px;
  --colorOne: rgba(255, 255, 255, 1);

  box-shadow: inset 0px 0px 0 0 var(--colorOne),
  inset 0px 0px 0 0 var(--colorOne),
  inset 0px 0px 0 0 var(--colorOne),
  inset 0px 0px 0 0 var(--colorOne),
  var(--valP) var(--valP) 0 0 var(--colorOne),
  var(--valP) var(--valN) 0 0 var(--colorOne),
  var(--valN) var(--valP) 0 0 var(--colorOne),
  var(--valN) var(--valN) 0 0 var(--colorOne);

  &:hover {
    box-shadow: inset var(--valIP) var(--valIP) 0 0 var(--colorOne),
    inset var(--valIP) var(--valIN) 0 0 var(--colorOne),
    inset var(--valIN) var(--valIP) 0 0 var(--colorOne),
    inset var(--valIN) var(--valIN) 0 0 var(--colorOne),
    0 0 0 0 var(--colorOne),
    0 0 0 0 var(--colorOne),
    0 0 0 0 var(--colorOne),
    0 0 0 0 var(--colorOne);
    color: black;

  }
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img}/>

                <Info>
                    <Title>{item.title}</Title>
                    <Button>sHOP NOW</Button>
                </Info>
            </Link>

        </Container>
    );
}

export default CategoryItem;