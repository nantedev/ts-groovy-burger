import { theme } from "@/theme/theme";
import styled from "styled-components";

export default function LoginFooter() {
  return (
    <LoginFooterStyled>
      <span>© 2025 Groovy Burger - Tous droits réservés.</span>
      <span>Made with ❤️ by Micka</span>
    </LoginFooterStyled>
  );
}

const LoginFooterStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: ${theme.spacing.xs};
  transform: translateY(30px);

  span {
    font-size: ${theme.fonts.size.P0};
    font-weight: 100;
    color: ${theme.colors.white};
  }
`;
