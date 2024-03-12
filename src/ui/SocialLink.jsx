import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  gap: 4px;
`;

const A = styled.a`
  margin-right: 0.7rem;
  color: hsl(185, 62%, 45%);
  font-size: 1.2rem;
  transition: all 0.3s linear;

  &:hover {
    color: hsl(184, 80%, 74%);
  }
`;

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: <FaFacebook /> },
  { id: 2, href: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 3, href: "https://www.twitter.com", icon: <FaInstagram /> },
];

function SocialLink() {
  return (
    <Ul>
      {socialLinks.map((vl) => (
        <li key={vl.id}>
          <A href={vl.href} target="_blank" rel="noreferrer">
            <span>{vl.icon}</span>
          </A>
        </li>
      ))}
    </Ul>
  );
}

export default SocialLink;
