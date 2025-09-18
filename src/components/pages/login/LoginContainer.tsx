import Logo from "@/components/reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

export function LoginContainer() {
  return (
    <LoginContainerStyled>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginContainerStyled>
  );
}

const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo-login-page {
    transform: scale(2.5);
  }
`;
