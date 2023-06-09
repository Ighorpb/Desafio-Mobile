import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CheckboxContainer = styled.View`
  margin-top: 10px;
`;

export const CheckboxLabel = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.Button``;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const CancelButton = styled.Button`
  margin-right: 10px;
`;

export const RemoveButton = styled.Button``;

export const Img = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

export const ButtonDelete = styled.Button`
  color: red;
`;

export const CheckboxGroup = styled.Text``;
