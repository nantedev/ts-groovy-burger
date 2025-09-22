import { theme } from "@/theme/theme";
import styled from "styled-components";

type CopyrightsProps = {
  className?: string;
};

export default function Copyrights({ className }: CopyrightsProps) {
  return (
    <CopyrightStyled className={className}>
      <span>© 2025 Groovy Burger — Tous droits réservés.</span>
      <span>Made with ❤️ by Micka(nantedev)</span>
    </CopyrightStyled>
  );
}
const CopyrightStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 2%;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.family.openSans};
  font-size: ${theme.fonts.size.SM};
  text-align: center;
`;
