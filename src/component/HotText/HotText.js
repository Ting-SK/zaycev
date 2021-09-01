import React, { useEffect, useState } from "react";
import { Text } from "../../ui/Tabs/styles";

export const HotText = (props) => {
  const [hours, setHours] = useState(new Date().getUTCHours() + 3);
  useEffect(() => {
    const timer = setInterval(() => {
      setHours(new Date().getUTCHours() + 3);
    }, 1000 * 60);
    return () => {
      clearInterval(timer);
    };
  }, []);
  console.log(hours);
  if (hours >= 12 && hours < 14) {
    return <Text hotTime>{props.children}</Text>;
  } else {
    return <Text>{props.children}</Text>;
  }
};
