import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const CloseButtonText = styled.Text`
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.View`
  margin-top: 10px;
`;
