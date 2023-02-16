import React from 'react';
import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  ${mobile({
    gridTemplateColumns: "1fr"
  })}
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    );
}

export default Categories;