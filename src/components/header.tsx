import React from "react";
import { Button } from "./button";
import {
  AccessWrapper,
  HeaderContainer,
  MobileButtonMenu,
  MobileIconMenu,
  Nav,
  NavItem,
  NavWrapper,
  StyledLogo,
  StyledUserIcon,
} from "./header.css";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Usuários", path: "users" },
  { title: "Louvores", path: "praises" },
];

function Header() {
  return (
    <HeaderContainer>
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
            <Button type="button" color="primary" size="sm" plain>
              <StyledUserIcon icon="UserIcon" outline /> entrar
            </Button>
            <Button type="button" color="primary" size="sm" radius="lg" outline>
              criar conta
            </Button>
          </AccessWrapper>
          {/* Nav mobile menu */}
          <MobileButtonMenu type="button" aria-label="menu mobile">
            <MobileIconMenu icon="MenuIcon" />
          </MobileButtonMenu>
        </NavWrapper>
    </HeaderContainer>
  );
}

export default Header;
