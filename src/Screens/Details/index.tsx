// import React, { useState, useEffect } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { View, Text, Image } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
// import axios from 'axios';
// import { Modal } from '../../Components/Modal';

// import {
//   Container,
//   Content,
//   MainTitle,
//   CheckboxContainer,
//   CheckboxLabel,
//   CheckboxGroup,
//   Buttons,
//   Button,
//   ButtonContainer,
//   CancelButton,
//   RemoveButton,
//   Img,
//   ButtonDelete,
// } from './styles';

// interface Data {
//   id: string;
//   compromisso: string;
//   description: string;
//   imagem: string;
//   segunda_feira: boolean;
//   terca_feira: boolean;
//   quarta_feira: boolean;
//   quinta_feira: boolean;
//   sexta_feira: boolean;
//   sabado: boolean;
//   domingo: boolean;
// }

// type RootStackParamList = {
//   Data: Data;
// };

// type MyScreenRouteProp = RouteProp<RootStackParamList, 'Data'>;


// export function Details()  {
//   const [data, setData] = useState<Data | null>(null);
//   const navigation = useNavigation<any>();
// const route = useRoute<MyScreenRouteProp>();

//   const { id } = route.params;
//   const [checkedDays, setCheckedDays] = useState<string[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const showApi = () => {
//     axios
//       .get(`http://172.18.0.126:3333/tasks/${id}`)
//       .then((response) => {
//         const task: Data = response.data;
//         setData(task);
//       })
//       .catch((err) => {
//         console.error('Erro ao buscar dados da API:', err);
//       });
//   };

//   useEffect(() => {
//     showApi();
//   }, []);

//   useEffect(() => {
//   if (data) {
//     setCheckedDays(getCheckedDays(data));
//   }
// }, [data]);

//   const getCheckedDays = (task: Data): string[] => {
//     const checkedDays: string[] = [];
//     if (task.segunda_feira) checkedDays.push('Segunda-feira');
//     if (task.terca_feira) checkedDays.push('Terça-feira');
//     if (task.quarta_feira) checkedDays.push('Quarta-feira');
//     if (task.quinta_feira) checkedDays.push('Quinta-feira');
//     if (task.sexta_feira) checkedDays.push('Sexta-feira');
//     if (task.sabado) checkedDays.push('Sábado');
//     if (task.domingo) checkedDays.push('Domingo');
//     return checkedDays;
//   };

//   const handleCheckboxChange = (values: string[]) => {
//     setCheckedDays(values);
//   };

//   const handleDeleteList = () => {
//     axios
//       .delete(`http://172.18.0.126:3333/tasks/${id}`)
//       .then(() => {
//         setData(null);
//         navigation.navigate('Home');
//       })
//       .catch((error) => {
//         console.error('Erro ao buscar dados da API:', error);
//       });
//   };

//   if (!data) {
//     return <Text>Carregando...</Text>;
//   }

//   return (
//     <Container>
//       <MainTitle>{data.compromisso}</MainTitle>
//       <View key={data.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Img source={{ uri: data.imagem }} />
//         <Text>{data.description}</Text>
//       </View>
//        <Content>
//           <CheckboxContainer>
//           <CheckboxLabel>
//     <CheckBox
//       value={checkedDays.includes('Segunda-feira')}
//       onValueChange={(value) => {
//         if (value) {
//           setCheckedDays([...checkedDays, 'Segunda-feira']);
//         } else {
//           setCheckedDays(checkedDays.filter((day) => day !== 'Segunda-feira'));
//         }
//       }}
//     />
//     <Text>Segunda-feira</Text>
//   </CheckboxLabel>
//   <CheckboxLabel>
//     <CheckBox
//       value={checkedDays.includes('Terça-feira')}
//       onValueChange={(value) => {
//         if (value) {
//           setCheckedDays([...checkedDays, 'Terça-feira']);
//         } else {
//           setCheckedDays(checkedDays.filter((day) => day !== 'Terça-feira'));
//         }
//       }}
//     />
//     <Text>Terça-feira</Text>
//   </CheckboxLabel>
//   <CheckboxLabel>
//     <CheckBox
//       value={checkedDays.includes('Quarta-feira')}
//       onValueChange={(value) => {
//         if (value) {
//           setCheckedDays([...checkedDays, 'Quarta-feira']);
//         } else {
//           setCheckedDays(checkedDays.filter((day) => day !== 'Quarta-feira'));
//         }
//       }}
//     />
//     <Text>Quarta-feira</Text>
//   </CheckboxLabel>
//   <CheckboxLabel>
//     <CheckBox
//       value={checkedDays.includes('Quinta-feira')}
//       onValueChange={(value) => {
//         if (value) {
//           setCheckedDays([...checkedDays, 'Quinta-feira']);
//         } else {
//           setCheckedDays(checkedDays.filter((day) => day !== 'Quinta-feira'));
//         }
//       }}
//     />
//     <Text>Quinta-feira</Text>
//   </CheckboxLabel>
//   <CheckboxLabel>
//     <CheckBox
//       value={checkedDays.includes('Sexta-feira')}
//       onValueChange={(value) => {
//         if (value) {
//           setCheckedDays([...checkedDays, 'Sexta-feira']);
//         } else {
//           setCheckedDays(checkedDays.filter((day) => day !== 'Sexta-feira'));
//         }
//       }}
//     />
//     <Text>Sexta-feira</Text>
//   </CheckboxLabel>
//   <CheckboxLabel>
//     <CheckBox
//       value={checkedDays.includes('Sábado')}
//       onValueChange={(value) => {
//         if (value) {
//           setCheckedDays([...checkedDays, 'Sábado']);
//         } else {
//           setCheckedDays(checkedDays.filter((day) => day !== 'Sábado'));
//         }
//       }}
//     />
//     <Text>Sábado</Text>
//   </CheckboxLabel>
//   <CheckboxLabel>
//     <CheckBox
//       value={checkedDays.includes('Domingo')}
//       onValueChange={(value) => {
//         if (value) {
//           setCheckedDays([...checkedDays, 'Domingo']);
//         } else {
//           setCheckedDays(checkedDays.filter((day) => day !== 'Domingo'));
//         }
//       }}
//     />
//     <Text>Domingo</Text>
//   </CheckboxLabel>
//           </CheckboxContainer>
//         <Buttons>
//           <TouchableOpacity onPress={() => navigation.navigate(`/cadastro/${id}`)}>
//             <Text>Editar</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={openModal}>
//             <Text>Deletar</Text>
//           </TouchableOpacity>
//         </Buttons>
//         <Modal isOpen={isModalOpen} onClose={closeModal} title="Remover compromisso?">
//           <ButtonContainer>
//             <TouchableOpacity onPress={closeModal}>
//               <Text>Cancelar</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleDeleteList}>
//               <Text>Remover</Text>
//             </TouchableOpacity>
//           </ButtonContainer>
//         </Modal>
//       </Content>
//     </Container>
//   );
// };

// export default Details;
