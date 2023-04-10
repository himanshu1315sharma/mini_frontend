import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
        
          <Logo>

          <img src="https://i.postimg.cc/xCJRFFtv/44.jpg" alt="Girl in a jacket" width="40" height="40" style={{"text-decoration": "none",  "margin-right": "25px","cursor": "pointer","padding-bottom": "0px"}}></img>
            AIR FASHION</Logo>
        </Center>
        <Right>
          <MenuItem>
          
          <Link to="/" style={{"text-decoration": "none",  "margin-right": "20px","font-size": "18px","font-weight" : "300","cursor": "pointer"}}>Register</Link>
          </MenuItem>
          <MenuItem><Link to="/login" style={{"text-decoration": "none",  "margin-right": "20px","font-size": "18px","font-weight" : "300","cursor": "pointer"}}>SIGN IN</Link></MenuItem>
          
          <MenuItem style={{"text-decoration": "none"}}><Link to="/productlist" style={{"text-decoration": "none",  "margin-right": "20px","font-size": "18px","font-weight" : "300","cursor": "pointer"}}>Product list</Link></MenuItem>
          <MenuItem>
            
            <img src="https://i.postimg.cc/xCJRFFtv/44.jpg" alt="Girl in a jacket" width="40" height="40" style={{"text-decoration": "none",  "margin-right": "5px","cursor": "pointer","padding-bottom": "0px"}}></img>

            
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
