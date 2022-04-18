import React, { Image } from "react-native";
import { CustomLogo, StyledText, StyledView } from "./styles";

export const Home = ({}) => {
  return (
    <StyledView>
      <StyledText>C.C.C.P</StyledText>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "stretch",
        }}
        source={require("./img/cccp.png")}
      />
    </StyledView>
  );
};
