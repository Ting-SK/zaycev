import React, { useEffect, useState } from "react";
import { List } from "../../ui/Navigation/styles";
import { UniqueList } from "./styles";

export const HotList = (props) => {
  const [hours, setHours] = useState(new Date().getHours());

  useEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().getHours());
    }, 1000 * 60);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (hours >= 13 && hours < 14) {
    return <UniqueList>{props.children}</UniqueList>;
  } else {
    return <List>{props.children}</List>;
  }
};
