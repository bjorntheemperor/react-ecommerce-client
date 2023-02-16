import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";


const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: '10px'
  })}
`
const ImgContainer = styled.div`
  flex: 1;

`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  object-position: center;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "10px 0",
    width: "100%",
  })}
`
const Title = styled.h1`
  font-weight: 500;
`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: ${props => props.color === "white" ? "1px solid black" : 0};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option`
  padding: 5px;
`
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({
    justifyContent: 'space-evenly',
    width: "100%",
  })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  padding: 5px;
  height: 30px;
  min-width: 30px;
  max-width: 100px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #01ab90;
  display: grid;
  place-items: center;
  margin: 0 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid #01ab90;
  background-color: white;
  cursor: pointer;
  transition: .3s;
  font-weight: 500;
  &:hover{
    background-color: #01ab90;
    color: white;
  }
`




const Product = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data)
            }catch (err){

            }
        }
        getProduct()

    }, [id])

    function handleQuantity(action){
        if (action === 'dec'){
            setQuantity(prevState => {
                if (prevState > 1) {
                    return prevState - 1
                } else return prevState
            })
        } else if (action === 'inc'){
            setQuantity(prevState => {
                return prevState + 1
            })
        }
    }

    const handleClick = () =>{
        dispatch(addProduct({...product, quantity, color, size}))
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {
                                product.color?.map((color) => (
                                    <FilterColor color={color} key={color} onClick={()=>setColor(color)}/>

                                ))
                            }
                            {color}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {
                                    product.size?.map((size)=>(
                                        <FilterSizeOption key={size}>{size}</FilterSizeOption>
                                    ))
                                }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")} style={{cursor:"pointer"}}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")} style={{cursor:"pointer"}}/>
                        </AmountContainer>

                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default Product;