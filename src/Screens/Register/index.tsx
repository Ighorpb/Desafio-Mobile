import React, { useState, useEffect } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Input,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxText,
  ButtonText,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Data = {
  id: string;
  compromisso: string;
  description: string;
  imagem: string;
  segunda_feira: boolean;
  terca_feira: boolean;
  quarta_feira: boolean;
  quinta_feira: boolean;
  sexta_feira: boolean;
  sabado: boolean;
  domingo: boolean;
};

type RootStackParamList = {
  Data: Data;
};

type MyScreenRouteProp = RouteProp<RootStackParamList, 'Data'>;

export function Register() {
  const navigation = useNavigation<any>();
  const route = useRoute<MyScreenRouteProp>();
  const { id } = route.params || '';

  const [compromisso, setCompromisso] = useState('');
  const [description, setDescription] = useState('');
  const [imagem, setImage] = useState('');
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      showApi();
    }
  }, [id]);

  function getCheckedDays(task: Data): string[] {
    const checkedDays: string[] = [];
    if (task.segunda_feira) checkedDays.push('Segunda-feira');
    if (task.terca_feira) checkedDays.push('Terça-feira');
    if (task.quarta_feira) checkedDays.push('Quarta-feira');
    if (task.quinta_feira) checkedDays.push('Quinta-feira');
    if (task.sexta_feira) checkedDays.push('Sexta-feira');
    if (task.sabado) checkedDays.push('Sábado');
    if (task.domingo) checkedDays.push('Domingo');
    return checkedDays;
  }

  function showApi() {
    axios
      .get(`http://172.18.0.126:3333/tasks/${id}`)
      .then((response) => {
        const task = response.data as Data;
        setCompromisso(task.compromisso);
        setDescription(task.description);
        setImage(task.imagem);
        setDates(getCheckedDays(task));
      })
      .catch((err) => {
        console.error('Erro ao buscar dados da API:', err);
      });
  }

  useEffect(() => {
    showApi();
    const timer = setTimeout(() => {
      setDates(dates);
    }, 1000000);

    return () => clearTimeout(timer);
  }, []);

  function generateRandomId() {
    const randomId = Math.random().toString(36).substring(2, 10);
    return randomId;
  }

  async function handleAtualizarDados() {
    const data: Data = {
      id: generateRandomId(),
      compromisso: compromisso,
      description: description,
      imagem: imagem,
      segunda_feira: dates.includes('Segunda-feira'),
      terca_feira: dates.includes('Terça-feira'),
      quarta_feira: dates.includes('Quarta-feira'),
      quinta_feira: dates.includes('Quinta-feira'),
      sexta_feira: dates.includes('Sexta-feira'),
      sabado: dates.includes('Sábado'),
      domingo: dates.includes('Domingo'),
    };

    axios
      .put(`http://172.18.0.126:3333/tasks/${id}`, data)
      .then(() => {
        navigation.navigate('Details');
      })
      .catch((err) => {
        console.error('Erro ao atualizar dados na API:', err);
      });
  }

  function handleEnviarDados() {
    if (
      !imagem.trim() ||
      !compromisso.trim() ||
      !description.trim() ||
      dates.length === 0
    ) {
      return;
    }

    const data = {
      id: generateRandomId(),
      compromisso: compromisso,
      description: description,
      imagem: imagem,
      segunda_feira: dates.includes('Segunda-feira'),
      terca_feira: dates.includes('Terça-feira'),
      quarta_feira: dates.includes('Quarta-feira'),
      quinta_feira: dates.includes('Quinta-feira'),
      sexta_feira: dates.includes('Sexta-feira'),
      sabado: dates.includes('Sábado'),
      domingo: dates.includes('Domingo'),
    };

    axios
      .post('http://192.168.1.10:3333/tasks', data)
      .then((response) => {
        console.log('Deu certo, dados na api', response.data);
        navigation.navigate('Home');
      })
      .catch((err) => {
        console.log('Deu ruim...', err);
      });
  }

  return (
    <Container>
      <Title>Cadastro</Title>
      <Input
        placeholder="Compromisso"
        value={compromisso}
        onChangeText={setCompromisso}
      />
      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <Input
        placeholder="Imagem"
        value={imagem}
        onChangeText={setImage}
      />
      <CheckboxContainer>
        <CheckboxLabel>Dias da semana:</CheckboxLabel>
        <CheckboxText>Segunda-feira</CheckboxText>
        <BouncyCheckbox
          isChecked={dates.includes('Segunda-feira')}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              setDates([...dates, 'Segunda-feira']);
            } else {
              setDates(dates.filter((date) => date !== 'Segunda-feira'));
            }
          }}
        />
        <CheckboxText>Terça-feira</CheckboxText>
        <BouncyCheckbox
          isChecked={dates.includes('Terça-feira')}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              setDates([...dates, 'Terça-feira']);
            } else {
              setDates(dates.filter((date) => date !== 'Terça-feira'));
            }
          }}
        />
        <CheckboxText>Quarta-feira</CheckboxText>
        <BouncyCheckbox
          isChecked={dates.includes('Quarta-feira')}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              setDates([...dates, 'Quarta-feira']);
            } else {
              setDates(dates.filter((date) => date !== 'Quarta-feira'));
            }
          }}
        />
        <CheckboxText>Quinta-feira</CheckboxText>
        <BouncyCheckbox
          isChecked={dates.includes('Quinta-feira')}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              setDates([...dates, 'Quinta-feira']);
            } else {
              setDates(dates.filter((date) => date !== 'Quinta-feira'));
            }
          }}
        />
        <CheckboxText>Sexta-feira</CheckboxText>
        <BouncyCheckbox
          isChecked={dates.includes('Sexta-feira')}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              setDates([...dates, 'Sexta-feira']);
            } else {
              setDates(dates.filter((date) => date !== 'Sexta-feira'));
            }
          }}
        />
        <CheckboxText>Sábado</CheckboxText>
        <BouncyCheckbox
          isChecked={dates.includes('Sábado')}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              setDates([...dates, 'Sábado']);
            } else {
              setDates(dates.filter((date) => date !== 'Sábado'));
            }
          }}
        />
        <CheckboxText>Domingo</CheckboxText>
        <BouncyCheckbox
          isChecked={dates.includes('Domingo')}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              setDates([...dates, 'Domingo']);
            } else {
              setDates(dates.filter((date) => date !== 'Domingo'));
            }
          }}
        />
      </CheckboxContainer>
      <TouchableOpacity onPress={handleEnviarDados}>
        <ButtonText>Cadastrar</ButtonText>
      </TouchableOpacity>
    </Container>
  );
}