import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import {useState} from "react";
import {sliderItems} from "../data";
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 131px);
  display: flex;
  background-color: #e8c5f1;
  position: relative;
  overflow: hidden;
  ${mobile({
    display: "none",
  })}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: beige;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && '10px'};
  right: ${props => props.direction === "right" && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: .5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  transition: .3s;
`
const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.bg};
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  max-width: 50%;
  overflow: hidden;
`

const Image = styled.img`
  height: 100%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  width: 75%;
`
const Button = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  background: transparent;
  border: 1px solid black;
  cursor: pointer;
  transition: .3s;
  &:hover{
    color: white;
    background-color: black;
  }
`


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1)
        } else {
            setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>

        </Container>
    );
}

export default Slider;