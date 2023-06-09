import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native';
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

export function Home() {
    const [data, setData] = useState<Data[]>([]);
    const navigation = useNavigation<any>();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            showData();
        });

        return unsubscribe;
    }, [navigation]);

    function showData() {
        api
            .get('/tasks')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }

    function handleCarRegister() {
        navigation.navigate('Register');
    }

    const handleCardDetails = (data: Data) => {
        navigation.navigate('Details', { data });
    };

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
            <CadastroButton onPress={() => handleCarRegister()}>
                <CadastroButtonText>Cadastro</CadastroButtonText>
            </CadastroButton>
            <Content>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleCardDetails(item)}>
                            <View>
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
                        </TouchableOpacity>
                    )}
                />
            </Content>
        </Container>
    );
}
