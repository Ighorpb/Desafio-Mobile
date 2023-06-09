import React, { useState, useEffect } from 'react';
import { Text, Image } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Modal } from '../../Components/Modal';
import { BackButton } from '../../Components/BackButton';
import {
  Container,
  TextContainer,
  Title,
  Header,
  Description,
  DaysContainer,
  DaysTitle,
  ButtonEdit,
  ButtonDelete,
  ButtonText,
  ButtonConfirm,
  ButtonCancel
} from './styles';
import { api } from '../../services/api';

interface Data {
  id: string;
  compromisso: string;
  description: string;
  segunda_feira: boolean;
  terca_feira: boolean;
  quarta_feira: boolean;
  quinta_feira: boolean;
  sexta_feira: boolean;
  sabado: boolean;
  domingo: boolean;
}

type RootStackParamList = {
  Details: { data: Data };
};

type MyScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export function Details() {
  const [data, setData] = useState<Data | null>(null);
  const navigation = useNavigation<any>();
  const route = useRoute<MyScreenRouteProp>();
  const [isloading, setIsLoading] = useState(true);

  const { data: taskData } = route.params;
  const [checkedDays, setCheckedDays] = useState<string[]>([]); // Inicialmente vazio

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  useEffect(() => {
    const showApi = async () => {
      const response = await api
        .get(`/tasks/${taskData.id}`)
      const { data: task } = response;
      setData(task);
      setCheckedDays(getCheckedDays(task));
      setIsLoading(false)
    }
    showApi();
  }, []);

  const getCheckedDays = (task: Data): string[] => {
    const checkedDays: string[] = [];
    if (task.segunda_feira) checkedDays.push('Segunda-feira');
    if (task.terca_feira) checkedDays.push('Terça-feira');
    if (task.quarta_feira) checkedDays.push('Quarta-feira');
    if (task.quinta_feira) checkedDays.push('Quinta-feira');
    if (task.sexta_feira) checkedDays.push('Sexta-feira');
    if (task.sabado) checkedDays.push('Sábado');
    if (task.domingo) checkedDays.push('Domingo');
    return checkedDays;
  };

  const handleCheckboxPress = (day: string) => {
    console.log("checkedDays.includ3333es(day)", checkedDays.includes(day))
    if (checkedDays.includes(day)) {
      setCheckedDays(checkedDays.filter((checkedDay) => checkedDay !== day));
    } else {
      setCheckedDays([...checkedDays, day]);
    }
  };

  const handleDeleteList = () => {
    api
      .delete(`/tasks/${taskData.id}`)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  };

  if (!data) {
    return <Text>Carregando...</Text>;
  }

  const handleCardRegister = () => {
    navigation.navigate('Register', {
      id: data.id,
      compromisso: data.compromisso,
      description: data.description,
      segunda_feira: data.segunda_feira,
      terca_feira: data.terca_feira,
      quarta_feira: data.quarta_feira,
      quinta_feira: data.quinta_feira,
      sexta_feira: data.sexta_feira,
      sabado: data.sabado,
      domingo: data.domingo,
    },
    );
  };

  function handleBack() {
    navigation.goBack()
  }


  if (isloading) {
    return (
      <></>
    )
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <TextContainer>
        <Title>{data.compromisso}</Title>
        <Description>{data.description}</Description>
      </TextContainer>
      <DaysContainer>
        <DaysTitle>Dias selecionados:</DaysTitle>
        {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'].map(
          (day) => (
            <BouncyCheckbox
              key={day}
              disabled={true}
              isChecked={checkedDays.includes(day)}
              text={day}
              onPress={() => handleCheckboxPress(day)}
            />
          )
        )}
      </DaysContainer>
      <ButtonEdit onPress={handleCardRegister}>
        <ButtonText>Editar</ButtonText>
      </ButtonEdit>
      <ButtonDelete onPress={openModal}>
        <ButtonText>Excluir</ButtonText>
      </ButtonDelete>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <Text>Remover Compromisso?</Text>
        <ButtonConfirm onPress={handleDeleteList}>
          <ButtonText>Deletar</ButtonText>
        </ButtonConfirm>
        <ButtonCancel onPress={closeModal}>
          <ButtonText>Cancelar</ButtonText>
        </ButtonCancel>
      </Modal>

    </Container>
  );
}
