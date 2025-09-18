import { theme } from "@/theme";
import styled from "styled-components";

export default function Spinner() {
  return <SpinnerStyled></SpinnerStyled>;
}

const SpinnerStyled = styled.div`
  border: 2px solid white;
  border-bottom: 2px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 11px;
  height: 11px;
  animation: spin 1s linear infinite;
  margin-right: 0.5em;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
