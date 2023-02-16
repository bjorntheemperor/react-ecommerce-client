import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";

const Container = styled.div`
  
`

const Title = styled.h1`
  margin: 50px 30px 0;
  text-transform: capitalize;
`

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    width: "100%",
  })}
`

const Filter = styled.div`
  margin: 30px;
  ${mobile({
    margin: "30px 0",
    padding: '0 30px',
    width: "100%",
  })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`

const Select = styled.select`
  outline: none;
  text-transform: capitalize;
  margin-left: 10px;
  padding: 10px;
  font-size: 20px;
  ${mobile({
    margin: "15px 0",
    width: "100%",
  })}
`

const Option = styled.option`
  font-size: 20px;
  text-transform: capitalize;
`


const ProductList = () => {
    const location = useLocation()
    const category = location.pathname.split('/')[2]

    const [filters, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        })
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{category}</Title>
            <FilterContainer>
              <Filter>
                  <FilterText>Filter Products:</FilterText>
                  <Select name="color" onChange={handleFilters}>
                      <Option disabled>Color</Option>
                      <Option>white</Option>
                      <Option>black</Option>
                      <Option>blue</Option>
                      <Option>yellow</Option>
                      <Option>red</Option>
                      <Option>green</Option>
                  </Select>
                  <Select name="size" onChange={handleFilters}>
                      <Option disabled>Size</Option>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                      <Option>XXL</Option>
                  </Select>
              </Filter>
              <Filter>
                  <FilterText>Sort Products:</FilterText>
                  <Select onChange={e=>setSort(e.target.value)}>
                      <Option value="newest">Newest</Option>
                      <Option value="asc">Price (asc)</Option>
                      <Option value="desc">Price (desc)</Option>
                  </Select>
              </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default ProductList;