import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, FlatList, Image, StatusBar } from 'react-native';
import {
  Container,
  MainTitle,
  Filter,
  Input,
  Content,
  CadastroButton,
  CadastroButtonText
} from './styles';

import { useNavigation } from '@react-navigation/native';

interface Data {
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
}

export function Home() {
    const [data, setData] = useState<Data[]>([]);
    const navigation = useNavigation<any>()

    function showData() {
        axios
            .get('http://192.168.1.10:3333/tasks')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }

    useEffect(() => {
        showData();
    }, []);

    function handleCarDetails() {
        navigation.navigate('Register')
    }

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true}
            />
          <MainTitle>Compromisso</MainTitle>
          <Filter>
            <Input placeholder="Pesquise pelo título ou descrição..." />
          </Filter>
          <CadastroButton onPress={() => handleCarDetails()}>
            <CadastroButtonText>Cadastro</CadastroButtonText>
          </CadastroButton>
            <Content>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item.imagem }} />
                            <View>
                                <Text>{item.compromisso}</Text>
                                <Text>{item.description}</Text>
                                {item.segunda_feira && <Text>Segunda</Text>}
                                {item.terca_feira && <Text>Terça</Text>}
                                {item.quarta_feira && <Text>Quarta</Text>}
                                {item.quinta_feira && <Text>Quinta</Text>}
                                {item.sexta_feira && <Text>Sexta</Text>}
                                {item.sabado && <Text>Sábado</Text>}
                                {item.domingo && <Text>Domingo</Text>}
                            </View>
                        </View>
                    )}
                />
            </Content>
        </Container>
    );
}
