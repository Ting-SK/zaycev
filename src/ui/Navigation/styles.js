import styled from "styled-components";
import { Media } from "../../lib/Media";

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align_items: flex-start;
  max-width: 1212px;
  width: 100%;
  height: 73px;
  background: #373737;
  ${Media.tablet} {
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
  }
`;

export const List = styled.li`
padding: 8px;
position: relative;
text-decoration: none; 
color: #ffffff;
}
`;
