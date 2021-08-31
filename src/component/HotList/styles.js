import styled from "styled-components";

export const UniqueList = styled.li`
padding: 8px;
position: relative;
text-decoration: none; 
color: #ffffff;
}

&:before{
  content: "";
  position: absolute;
  left: 6px;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background: #FF3C00;
}
`;
