import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "@/components/reusable-ui/TextInput";
import Button from "@/components/reusable-ui/Button";
import { theme } from "@/theme/theme";
import { authenticateUser } from "@/api/user";
import Welcome from "./Welcome";
import { loginFormValidator } from "./loginFormValidators";
import { ErrorMessage } from "@/components/reusable-ui/ErrorMessage";

type Status = "success" | "loading" | "error" | "idle";

export default function LoginForm() {
  // state
  const [username, setUsername] = useState<string>("");
  //const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  // const [hasError, setHasError] = useState(true);
  const [status, setStatus] = useState<Status>("idle");

  // comportements
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = loginFormValidator.safeParse(username);

    if (!validation.success) {
      setStatus("error"); //setHasError(true);
      setError(validation.error.issues[0].message);
      return;
    }
    setStatus("loading");

    const userReceived = await authenticateUser(username);

    setTimeout(() => {
      setUsername("");
      navigate(`order/${userReceived.username}`);
    }, 1500);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <div className="input-and-error-message">
          <TextInput
            value={username}
            onChange={handleChange}
            placeholder={"Entrez votre prénom"}
            required
            Icon={<BsPersonCircle />}
            className="input-login"
            version="normal"
          />
          {status === "error" && <ErrorMessage error={error} />}
        </div>
        <Button
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward />}
          isLoading={status === "loading"}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: ${theme.fonts.family.stylish};

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-and-error-message {
    margin: 18px 0;

    .input-login {
      margin-bottom: 10px;
    }
  }

  .error {
    color: red;
    font-size: ${theme.fonts.size.P0};
    font-family: ${theme.fonts.family.openSans};
    font-weight: ${theme.fonts.weights.regular};
  }

  .input-login {
    margin: 18px 0; // must be handled in Parent
  }
`;
