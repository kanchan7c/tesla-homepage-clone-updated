import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

const [hamburgerStatus, setHamburgerStatus] = useState(false);

  return (
    <Container>
      <span>
        <img className="logo" src="/Images/logo.svg" alt="Logo" />
      </span>
      <Menu>
       <span> Model S</span>
       <span> Model Y</span>
       <span> Model X</span>
       <span> Model 3</span>
       <span> Solar Panel</span>
       <span> Solar Roofs</span>
      </Menu>

      <RightMenu>
       <span> Shop</span>
       <span> Account</span>
        <Hamburger  onClick={() => setHamburgerStatus(true)}/>
      </RightMenu>
      <HamburgerMenu show={hamburgerStatus}>
        <CloseMenuButton onClick={() => setHamburgerStatus(false)}/>
        <li>
         <span> Model S</span>
        </li>
        <li>
         <span> Model 3</span>
        </li>
        <li>
         <span> Model X</span>
        </li>
        <li>
         <span> Model Y</span>
        </li>
        <li>
         <span> solar roof</span>
        </li>
        <li>
         <span> solar panels</span>
        </li>
        <li>
         <span> Existing Inventory</span>
        </li>
        <li>
         <span> Used inventory</span>
        </li>
        <li>
         <span> test drive</span>
        </li>
        <li>
         <span> powerwall</span>
        </li>
        <li>
         <span> commercial energy</span>
        </li>
        <li>
         <span> utilities</span>
        </li>
        <li>
         <span> charging</span>
        </li>
        <li>
         <span> find us</span>
        </li>
        <li>
         <span> support</span>
        </li>
        <li>
         <span> investor relations</span>
        </li>
        <li>
         <span> shop</span>
        </li>
        <li>
         <span> account</span>
        </li>
        <li>
         <span> 
            more <p>&gt;</p>
          </span>
        </li>
      </HamburgerMenu>
    </Container>
  );
};

export default Header;

// styling goes here

const Container = styled.div`
  min-height: 4rem;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 805px) {
    display: none;
  }

  span {
    font-weight: 500;
    text-transform: capitalize;
    padding: 2px 8px;
    flex-wrap: nowrap;
    border-radius: 5px;
    margin-right: 0.5rem;
    transition: background 0.5s;
  }

  span:hover {
    background-color: #dadee7;
    cursor: pointer;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 500;
    text-transform: capitalize;
    padding: 2px 8px;
    flex-wrap: nowrap;
    border-radius: 5px;
    position: relative;
    transition: background 0.5s;
  }

  span:hover {
    background-color: #dadee7;
    cursor: pointer;
  }

  @media (max-width: 805px) {
    a {
      display: none;
    }
  }
`;

const Hamburger = styled(MenuIcon)`
  cursor: pointer;
`
const HamburgerMenu = styled.div`
  position: fixed;
  width: 20rem;
  top: 0;
  bottom:0;
  right: 0;
  margin-top: 1rem;
  text-transform: capitalize;
  list-style: none;
  background-color: white;
  padding: 2rem 1rem 1rem 2rem;
  line-height: 2.2rem;
  transform: ${props => props.show ? 'translateX(0%)': 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
li {
    text-align: left;

    span {
        cursor: pointer;
      }
  }

  p {
    position: absolute;
    font-size: 1.3rem;
    bottom: 4.5rem;
    right: 4rem;
    font-weight: 400;
    cursor: pointer;
  }
  
`;

const CloseMenuButton = styled(CloseIcon)`
  position: absolute;
  top: 0.5rem;
  right: 3rem;
  cursor: pointer;
`

