import React from "react";
import { NavLink } from "react-router-dom";
import { List, NavWrapper } from "./styles";
import "./style.css";
import { HotList } from "../../component/HotList/HotList";

export const Navigation = () => {
  return (
    <>
      <NavWrapper>
        <NavLink
          to="/musstories"
          className="links"
          activeClassName={"links-selected"}
        >
          <List>Муз сторис</List>
        </NavLink>
        <NavLink
          to="/top10"
          className="links"
          activeClassName={"links-selected"}
        >
          <List> Топ 10 недели</List>
        </NavLink>{" "}
        <NavLink
          to="/happynation"
          className="links"
          activeClassName={"links-selected"}
        >
          <List>Хепинейшн</List>
        </NavLink>{" "}
        <NavLink
          to="/videos"
          className="links"
          activeClassName={"links-selected"}
        >
          <HotList>Видео</HotList>
        </NavLink>
        <NavLink
          to="/podcasts"
          className="links"
          activeClassName={"links-selected"}
        >
          <HotList>Подкасты</HotList>
        </NavLink>{" "}
        <NavLink
          to="/happybirthday"
          className="links"
          activeClassName={"links-selected"}
        >
          <List>Хеппибёздим</List>
        </NavLink>{" "}
        <NavLink
          to="/readtosing"
          className="links"
          activeClassName={"links-selected"}
        >
          <List>Читаем запоем</List>
        </NavLink>
      </NavWrapper>
    </>
  );
};
