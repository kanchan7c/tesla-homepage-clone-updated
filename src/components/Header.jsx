import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

const [hamburgerStatus, setHamburgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img className="logo" src="/Images/logo.svg" alt="Logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model X</a>
        <a href="#">Model 3</a>
        <a href="#">Solar Panel</a>
        <a href="#">Solar Roofs</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <Hamburger  onClick={() => setHamburgerStatus(true)}/>
      </RightMenu>
      <HamburgerMenu show={hamburgerStatus}>
        <CloseMenuButton onClick={() => setHamburgerStatus(false)}/>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">solar roof</a>
        </li>
        <li>
          <a href="">solar panels</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used inventory</a>
        </li>
        <li>
          <a href="">test drive</a>
        </li>
        <li>
          <a href="">powerwall</a>
        </li>
        <li>
          <a href="">commercial energy</a>
        </li>
        <li>
          <a href="">utilities</a>
        </li>
        <li>
          <a href="">charging</a>
        </li>
        <li>
          <a href="">find us</a>
        </li>
        <li>
          <a href="">support</a>
        </li>
        <li>
          <a href="">investor relations</a>
        </li>
        <li>
          <a href="">shop</a>
        </li>
        <li>
          <a href="">account</a>
        </li>
        <li>
          <a href="">
            more <p>></p>
          </a>
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

  a {
    font-weight: 500;
    text-transform: capitalize;
    padding: 2px 8px;
    flex-wrap: nowrap;
    border-radius: 5px;
    margin-right: 0.5rem;
    transition: background 0.5s;
  }

  a:hover {
    background-color: #dadee7;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    text-transform: capitalize;
    padding: 2px 8px;
    flex-wrap: nowrap;
    border-radius: 5px;
    position: relative;
    transition: background 0.5s;
  }

  a:hover {
    background-color: #dadee7;
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

    a {
        cursor: pointer;
      }
  }

  p {
    position: absolute;
    font-size: 1.3rem;
    bottom: 4.5rem;
    right: 4rem;
    font-weight: 400;
  }
  
`;

const CloseMenuButton = styled(CloseIcon)`
  position: absolute;
  top: 0.5rem;
  right: 3rem;
  cursor: pointer;
`

