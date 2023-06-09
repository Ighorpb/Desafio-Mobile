import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;


export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CheckboxContainer = styled.View`
  margin-top: 20px;
  flex-direction: column;
`;

export const CheckboxLabel = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxText = styled.Text`
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #e91e63;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
