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
import z from "zod";

const usernameSchema = z
  .string()
  .trim()
  .min(1, "Veuillez entrer un prénom.")
  .min(2, "Le prénom doit contenir au moins 2 caractères.")
  .max(20, "Le prénom ne peut pas dépasser 20 caractères.")
  .regex(
    /^[a-zA-Z-]+$/,
    "Le prénom ne doit contenir que des lettres ou un tiret (-)."
  );

export default function LoginForm() {
  // state
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // comportements
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const validation = usernameSchema.safeParse(username);
    if (!validation.success) {
      setError(validation.error.issues[0].message);
      setIsLoading(false);
      return;
    }
    setError(null);
    const userReceived = await authenticateUser(username);

    setUsername("");
    navigate(`order/${userReceived.username}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    if (error) {
      setError(null);
    }
  };

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <div className="input-container">
          <TextInput
            value={username}
            onChange={handleChange}
            placeholder={"Entrez votre prénom"}
            required
            Icon={<BsPersonCircle />}
            className="input-login"
            version="normal"
          />
          {error && <div className="error">{error}</div>}
        </div>
        <Button
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward />}
          isLoading={isLoading}
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

  .input-container {
    margin-bottom: 20px;
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
