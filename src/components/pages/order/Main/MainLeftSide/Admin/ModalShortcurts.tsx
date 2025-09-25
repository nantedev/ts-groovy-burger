import { theme } from "@/theme/theme";
import { isMac } from "@/utils/window";
import styled from "styled-components";

type ModalShortcutsProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ModalShortcurts = ({ onClick }: ModalShortcutsProps) => {
  const raccourci = isMac() ? "⌘" : "Ctrl";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // Vérifie si onClick existe avant de l'appeler (évite les erreurs si undefined)
    onClick && onClick(event);
  };

  return (
    <ModalShortcurtsStyled>
      <span className="title">💡 Pour aller plus vite :</span>
      <span className="shortcut-message i">{`${raccourci} + i : Toggle "mode" admin`}</span>
      <span className="shortcut-message j">{`${raccourci} + j : Toggle "panel" admin`}</span>
      <button onClick={handleClick} className="shortcut-message">
        Ne plus rappeler
      </button>
    </ModalShortcurtsStyled>
  );
};

const ModalShortcurtsStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  transition: ease-in 100ms;
  gap: 15px;
  z-index: 10;

  .title {
    font-weight: ${theme.fonts.weights.bold};
  }

  .shortcut-message {
    font-size: ${theme.fonts.size.SM};
  }

  button {
    padding: 13px 58px;
    border-radius: 25px;
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: transparent;
    border: 1px solid ${theme.colors.white};
    :hover {
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
    :active {
      opacity: 50%;
    }
  }
`;
