import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { v4 as uuidv4 } from 'uuid';
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
  Button,
} from './styles';

// Rest of your component code


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

const Cadastro = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<MyScreenRouteProp>();
  const { id } = route.params;

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

  function handleAtualizarDados() {
    const data: Data = {
      id: uuidv4(),
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
      .then((response) => {
        console.log('Dados atualizados na API:', response.data);
        navigation.navigate('/');
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

    const data: Data = {
      id: uuidv4(),
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
      .post('http://172.18.0.126:3333/tasks', data)
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
      <Title>Cadastro / Alteração</Title>
      <Input
        placeholder="Insira a URL da imagem desejada"
        value={imagem}
        onChangeText={(text) => setImage(text)}
      />
      <Image source={{ uri: imagem }} style={{ display: id ? 'flex' : 'none' }} />
      <Input
        placeholder="Título"
        value={compromisso}
        onChangeText={(text) => setCompromisso(text)}
      />
      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <CheckboxContainer>
        <CheckboxLabel>
          <CheckBox
            value={dates.includes('Segunda-feira')}
            onValueChange={(value) => {
              if (value) {
                setDates([...dates, 'Segunda-feira']);
              } else {
                setDates(dates.filter((day) => day !== 'Segunda-feira'));
              }
            }}
          />
          <CheckboxText>Segunda-feira</CheckboxText>
        </CheckboxLabel>
        {/* Restante dos dias da semana */}
      </CheckboxContainer>
      <Button
        title={id ? 'Atualizar' : 'Cadastrar'}
        onPress={id ? handleAtualizarDados : handleEnviarDados}
        disabled={!imagem.trim() || !compromisso.trim() || !description.trim()}
      />
    </Container>
  );
};


