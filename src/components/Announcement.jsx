import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #01ab90;
  color: white;
  display: grid;
  place-items: center;
  font-size: 16px;
  font-weight: 500;

  ${mobile({
    fontSize: "12px",
  })}

`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders over $50
        </Container>
    );
}

export default Announcement;