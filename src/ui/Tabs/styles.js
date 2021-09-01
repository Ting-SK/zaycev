import styled from "styled-components";
import { Media } from "../../lib/Media";

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align_items: center;
  max-width: 1212px;
  width: 100%;
  height: 73px;
  background: #373737;
  ${Media.smallDesktop} {
    justify-content: space-around;
  }
  ${Media.tablet} {
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
  }
`;

export const Text = styled.p`
  position: relative;
  text-decoration: none;
  color: #ffffff;
  ${({ hotTime }) =>
    hotTime &&
    `
&:before{
    content: "";
    position: absolute;
    left: -2px;
    top: 1px;
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background: #FF3C00;
  }
`}
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 8px;
  margin: 0 21px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  position: relative;
  cursor: pointer;
  &:first-child {
    margin: 0;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 55px;
    width: 0;
    left: 0;
    height: 2px;
    background-color: #ff3c00;
    transition: width 0.3s ease-out;
  }
  &:hover:after {
    width: 100%;
  }

  ${Media.smallDesktop} {
    margin: 0;
  }

  ${Media.tablet} {
    height: 100%;
    border-collapse: collapse;
    border-top: 1px solid #505050;
    border-bottom: 1px solid #505050;
  }
  ${Media.mobile} {
    justify-content: flex-start;
    padding-left: 28px;
  }
  ${({ active }) =>
    active &&
    `
    &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 0;
          height: 2px;
          background-color: #ff3c00;
        }
`}
`;
