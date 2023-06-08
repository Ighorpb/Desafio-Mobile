import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseButton = styled.Text`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #aaa;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;
