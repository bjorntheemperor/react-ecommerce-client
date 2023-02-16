import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Product from "./Product";
import {mobile} from "../responsive";
import axios from "axios";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  ${mobile({
    gridTemplateColumns: "1fr 1fr",
  })}
`

const Products = ({category, filters, sort}) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        const getProducts = async () =>{
            try{
                const res = await axios.get(
                    category
                        ? `http://localhost:7777/api/products?category=${category}`
                        : 'http://localhost:7777/api/products'
                )
                setProducts(res.data)
            }catch (err){

            }
        }
        getProducts()
    }, [category])

    useEffect(()=>{
        category && setFilteredProducts(
            products.filter(item=>Object.entries(filters).every(([key, value]) => {
                return item[key].includes(value)
            }))
        )
    }, [products, category, filters])


    useEffect(()=>{
        if (sort === "newest"){
            setFilteredProducts(prevState =>
                [...prevState].sort((a,b)=> a.createdAt - b.createdAt)
            )
        } else if (sort === "asc"){
            setFilteredProducts(prevState =>
                [...prevState].sort((a,b)=> a.price - b.price)
            )
        } else if (sort === "desc"){
            setFilteredProducts(prevState =>
                [...prevState].sort((a,b)=> a.price - b.price)
            )
        }


    }, [sort])

    return (
        <Container>
            {category
                ? filteredProducts.map((item)=>(<Product item={item} key={item._id}/>))
                : products.map((item)=>(<Product item={item} key={item._id}/>))
            }
        </Container>
    );
}

export default Products;