import styled from "styled-components";

type ShortcutsProps = {
  classname?: string;
};

export const ModalShortcurts = ({ classname }: ShortcutsProps) => {
  return (
    <ModalShortcurtsStyled className={classname}>
      ModalShortcurts
    </ModalShortcurtsStyled>
  );
};

const ModalShortcurtsStyled = styled.div``;
