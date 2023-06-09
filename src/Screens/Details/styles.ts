import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const TextContainer = styled.View`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const DaysContainer = styled.View`
  margin-bottom: 20px;
`;

export const DaysTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ButtonDelete = styled(Button)`
  background-color: #ff0000;
`;

export const ButtonEdit = styled(Button)`
  background-color: #006600;
`;


export const ButtonConfirm = styled(Button)`
  background-color: #ff0000;
`;


export const ButtonCancel = styled(Button)`
  background-color: #006600;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: #ffffff;
  padding: 20px;
  width: 80%;
  max-height: 80%;
  border-radius: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const CloseButtonText = styled.Text`
  font-size: 24px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonContainerModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const CancelButton = styled(Button)`
  background-color: #ff0000;
`;

export const RemoveButton = styled(Button)`
  background-color: #006600;
`;
