import React from "react";
import { Link } from "react-router-dom";
import {
  CompanyLink,
  Copyright,
  Creator,
  HeartIcon,
  SocialIcon,
  SocialMediaContainer,
  Title,
} from "./footer.css";
import { IconName } from "./Icon";

const socialIcons = [
  { title: "Facebook", alt: "", icon: "Facebook", url: "#!" },
  { title: "Twitter", alt: "", icon: "Twitter", url: "#!" },
  { title: "Linkedin", alt: "", icon: "Linkedin", url: "#!" },
  { title: "Instagram", alt: "", icon: "Instagram", url: "#!" },
];

function Footer() {
  return (
    <footer>
      <SocialMediaContainer>
        {socialIcons.map((item, index) => (
          <a key={`social-link-${index}`} href={item.url}>
            <SocialIcon
              key={`social-item-${index}`}
              name={item.icon as IconName}
            ></SocialIcon>
          </a>
        ))}
      </SocialMediaContainer>
      <Copyright>
        <Title>
          © 2022 Copyright: <CompanyLink to="home">SemNome.com.br</CompanyLink>
        </Title>
        <Title>
          Made with <HeartIcon icon="HeartIcon" /> by{" "}
          <Creator href="https://github.com/yaakam" target="_blank">
            Yaakam
          </Creator>
        </Title>
      </Copyright>
    </footer>
  );
}

export default Footer;
