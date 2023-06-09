import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Filter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 300px;
  padding: 8px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 10px;
`;

export const Img = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;

export const Content = styled.View`
  border-top-width: 1px;
  border-color: #ccc;
  padding-top: 20px;
  flex: 1;
`;

export const CadastroButton = styled.TouchableOpacity`
  background-color: #0056b3;
  padding: 10px;
  border-radius: 4px;
`;

export const CadastroButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
