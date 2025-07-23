import styled from "styled-components";


export const InfoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 40px;
  overflow-y: auto;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;
