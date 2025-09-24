import { theme } from "@/theme/theme";
import { isMac } from "@/utils/window";
import styled from "styled-components";

type ModalShortcutsProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ModalShortcurts = ({ onClick }: ModalShortcutsProps) => {
  const raccourci = isMac() ? "⌘" : "Ctrl";

  return (
    <ModalShortcurtsStyled>
      <span className="title">💡 Pour aller plus vite :</span>
      <span className="shortcut-message i">{`${raccourci} + i : Toggle "mode" admin`}</span>
      <span className="shortcut-message j">{`${raccourci} + j : Toggle "panel" admin`}</span>
      <button onClick={onClick} className="shortcut-message">
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
`;
