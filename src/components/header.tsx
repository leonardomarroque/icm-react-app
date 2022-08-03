import React from "react";
import { Button } from "./button";
import {
  AccessWrapper,
  MobileButtonMenu,
  MobileIconMenu,
  Nav,
  NavContainer,
  NavItem,
  NavWrapper,
  StyledLogo,
  StyledUserIcon,
} from "./header.css";
import HeroIcon from "./hero-icon";

const navItems = [
  { title: "Home", path: "home" },
  { title: "Usuários", path: "users" },
  { title: "Louvores", path: "praises" },
];

function Header() {
  return (
    <header>
      <NavContainer>
        <NavWrapper>
          <StyledLogo />
          <Nav>
            {navItems.map((item, index) => (
              <li key={`nav-item-${index}`}>
                <NavItem to={item.path}>{item.title}</NavItem>
              </li>
            ))}
          </Nav>
          <AccessWrapper>
            <Button color="secondary" size="sm" plain>
              <StyledUserIcon icon="UserIcon" outline /> entrar
            </Button>
            <Button color="secondary" size="sm">
              criar conta
            </Button>
          </AccessWrapper>
          {/* Nav mobile menu */}
          <MobileButtonMenu type="button">
            <MobileIconMenu icon="MenuIcon" outline />
          </MobileButtonMenu>
        </NavWrapper>
      </NavContainer>
    </header>
  );
}

export default Header;
