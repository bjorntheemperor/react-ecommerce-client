import React, {useEffect} from 'react';
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@mui/icons-material"
import {Badge} from "@mui/material";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {persistor} from "../redux/store";

const Container = styled.div`
  height: 100px;
  background-color: white;
  ${mobile({
    height: '180px'
  })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    width: "100%",
    height: "100%",
    padding: "10px 0",
    display: "grid",
    justifyContent: "center",
    gridTemplateAreas:
            '"center" "right" "left"',
  })}


`
const Left = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${mobile({
    gridArea: 'left',
    width: "90vw",
    justifyContent: "center",
  })}
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 85%;
  max-width: 270px;
  padding: 5px;
  ${mobile({
    maxWidth: 'initial',
    width:"100%"
  })}
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  ${mobile({display: "none"})}

`

const Input = styled.input`
  border: 0;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  ${mobile({
    width:"90%"
  })}

`


const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  ${mobile({
    gridArea: 'center'
  })}
`

const Logo = styled.h1`
  font-weight: bold;
  border: 10px solid #00d0b0;
  min-width: 220px;
  padding: 3px 5px 10px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  color: #000;
`

const Right = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    gridArea: 'right',
    width: "100%",
    justifyContent: "space-between",
  })}

`
const MenuItemWrapper = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({
    marginLeft: "0",
  })}
`

const UserBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`
const Avatar = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  
`
const AvatarWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
  border: 1px solid #ccc;
`
const Username = styled.div`
  font-weight: 500;
  font-size: 20px;
`

const Navbar = () => {

    let handleSignOut = () => {
        persistor.purge()
        window.location.reload()
    }

    let defaultImg = "https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png"

    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)
    console.log(user)

    useEffect(()=>{
        console.log('NavBar refreshed')
    }, [user])

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color:"gray", fontSize:20}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/">
                        <Logo>Ko&ko</Logo>
                    </Link>
                </Center>
                <Right>
                    {user ? <MenuItemWrapper onClick={handleSignOut}>SIGN OUT</MenuItemWrapper> : <MenuItemWrapper><Link to="/register">REGISTER</Link></MenuItemWrapper>}
                    {user
                        ? <UserBar>
                            <Username>{user.username}</Username>
                            <AvatarWrapper>
                                <Avatar src={user.img ? user.img : defaultImg}/>
                            </AvatarWrapper>
                          </UserBar>
                        : <MenuItemWrapper><Link to="/login">SIGN IN</Link></MenuItemWrapper>
                    }
                    <MenuItemWrapper>
                        <Link to='/cart'>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>
                    </MenuItemWrapper>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;