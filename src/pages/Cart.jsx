import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../requestMethods";
import {useNavigate} from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    flexDirection: "column",
    padding: "0"
  })}
  
`
const TopButton = styled.button`
  cursor: pointer;
  padding: 10px;
  font-weight: 600;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
  ${mobile({
    margin: "10px 0",
    width: "100%",
  })}

`

const TopTexts = styled.div`
  ${mobile({
    margin: "15px 0",
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  })}

`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    
  })}
`
const Info = styled.div`
  flex: 3;
  margin-right: 30px;
  ${mobile({
    flex: "initial",
    width: "100%",
    marginRight: '0'
  })}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 30px 0;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    width: "100%",
  })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
  height: 240px;
  object-fit: contain;
  object-position: center;
  ${mobile({
    margin: "15px 0",
    width: "50%",
  })}
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    paddingRight: "0",
  })}
`

const ProductName = styled.span`
  
`

const ProductId = styled.span`
  
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color === "white" ? "black" : "transparent"};
`

const ProductSize = styled.span`
  
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  })}
`

const ProductAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({
    alignItems: "center",
    margin: 0
  })}
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`


const Summary = styled.div`
  flex: 1;
  border: .5px solid aquamarine;
  border-radius: 10px;
  padding: 20px;
  height: auto;
  ${mobile({
    marginTop: "30px",
  })}
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: ${props=>props.type==="total" && "500"};
  font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const SummaryButton = styled.button`
    width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`


const Cart = () => {
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const [stripeToken, setStripeToken] = useState(null)

    const shippingPrice = 4.99
    const shippingDiscount = -4.99

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                });
                console.log('is this even works?')
                navigate("/success", {data: res.data});
            } catch (err){
                console.log(err)
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken, cart.total. navigate])


    const onClick = () => {
        navigate("/success")
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
               <Title>YOUR BAG</Title>
                <Top>
                  <TopButton onClick={onClick}>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist (0)</TopText>
                    </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (
                            <Product key={Math.random()*100000}>
                                <ProductDetail>
                                    <Image
                                        src={product.img}/>
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product._id}</ProductId>
                                        <ProductColor color={product.color}/>
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                            ))
                        }
                       <Hr/>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>$ {shippingPrice}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ {shippingDiscount}</SummaryItemPrice>
                        </SummaryItem>
                        {/*<SummaryItem>*/}
                        {/*    <SummaryItemText>Subtotal</SummaryItemText>*/}
                        {/*    <SummaryItemPrice>$ {cart.total + shippingPrice + shippingDiscount}</SummaryItemPrice>*/}
                        {/*</SummaryItem>*/}
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total + shippingPrice + shippingDiscount}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Ko&Ko shop"
                            image='https://pbs.twimg.com/profile_images/1461077904893399041/8h1N_Stc_400x400.jpg'
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <SummaryButton>CHECK OUT NOW!</SummaryButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default Cart;