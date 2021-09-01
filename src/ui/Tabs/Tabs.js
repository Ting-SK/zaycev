import React, { useState } from "react";
import { List, NavWrapper, Text } from "./styles";
import { HotText } from "../../component/HotText";

const titles = [
  "Муз сторис",
  "Топ 10 недели",
  "Хепинейшн",
  "Видео",
  "Подкасты",
  "Хеппибёздим",
  "Читаем запоем",
];

export const Tabs = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <NavWrapper>
        {titles.map((title) => (
          <List
            key={title}
            active={active === title}
            onClick={() => setActive(title)}
          >
            {title === "Видео" || title === "Подкасты" ? (
              <HotText>{title}</HotText>
            ) : (
              <Text>{title}</Text>
            )}
          </List>
        ))}
      </NavWrapper>
    </>
  );
};
