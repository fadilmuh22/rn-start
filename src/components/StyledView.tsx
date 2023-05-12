import styled from "styled-components/native";
import { View } from "./Themed";

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const Column = styled(View)`
  flex-direction: column;
  align-items: center;
`;

export const Center = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
