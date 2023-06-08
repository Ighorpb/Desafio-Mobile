import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Filter = styled.View`
  flex-direction: column;
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
`;

export const Img = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Content = styled.View`
  border-top-width: 1px;
  border-color: #ccc;
  padding-top: 20px;
  flex: 1;
`;

// export const Button = styled.Text`
//   background-color: #0056b3;
//   color: #fff;
//   padding: 10px;
//   border-radius: 4px;
//   font-size: 16px;
//   position: absolute;
//   top: 10px;
//   right: 10px;
// `;
