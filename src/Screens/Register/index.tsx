import React, { useState, useEffect } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { BackButton } from '../../Components/BackButton';

import {
    Container,
    Header,
    Input,
    CheckboxContainer,
    CheckboxLabel,
    CheckboxWrapper,
    CheckboxText,
    ButtonText,
    Button,
    Title
} from './styles';
import { api } from '../../services/api';

type Data = {
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
    const [dates, setDates] = useState<string[]>([]);
    const [isloading, setIsLoading] = useState(true);




    function handleBack() {
        navigation.goBack()
    }

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

    async function showApi() {
        try {
            const response = await api
                .get(`/tasks/${id}`)
            const task = response.data;
            setCompromisso(task.compromisso);
            setDescription(task.description);
            setDates(getCheckedDays(task));
        } catch (err) {
            console.error('Erro ao buscar dados da API:', err);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (id) {
            showApi();
        } else {
            setIsLoading(false)
        }
    }, []);

    function generateRandomId() {
        const randomId = Math.random().toString(36).substring(2, 10);
        return randomId;
    }

    // Atualizar os dados para serem enviados novamente para a Page Home
    async function handleAtualizarDados() {
        const data: Data = {
            id: generateRandomId(),
            compromisso: compromisso,
            description: description,
            segunda_feira: dates.includes('Segunda-feira'),
            terca_feira: dates.includes('Terça-feira'),
            quarta_feira: dates.includes('Quarta-feira'),
            quinta_feira: dates.includes('Quinta-feira'),
            sexta_feira: dates.includes('Sexta-feira'),
            sabado: dates.includes('Sábado'),
            domingo: dates.includes('Domingo'),
        };

        try {
            await api.put(`/tasks/${id}`, data);
            navigation.navigate('Home');
        } catch (err) {
            console.error('Erro ao atualizar dados na API:', err);
        }
    }

    // Enviar os dados para a Page Home e deixando os campos obrigatórios
    function handleEnviarDados() {
        if (
            !compromisso.trim() ||
            !description.trim() ||
            dates.length === 0
        ) {
            return;
        }

        const data: Data = {
            id: generateRandomId(),
            compromisso: compromisso,
            description: description,
            segunda_feira: dates.includes('Segunda-feira'),
            terca_feira: dates.includes('Terça-feira'),
            quarta_feira: dates.includes('Quarta-feira'),
            quinta_feira: dates.includes('Quinta-feira'),
            sexta_feira: dates.includes('Sexta-feira'),
            sabado: dates.includes('Sábado'),
            domingo: dates.includes('Domingo'),
        };

        api
            .post('/tasks', data)
            .then(() => {
                navigation.navigate('Home');
            })
            .catch((err) => {
                console.error('Erro ao enviar dados para a API:', err);
            });
    }

    // Renderizar os checkBox
    if (isloading) {
        return (
            <>
            </>
        )
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
            </Header>

            <Title>
                Cadastro / Alterar
            </Title>
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
            <CheckboxContainer>
                <CheckboxLabel>Dias da semana:</CheckboxLabel>
                <CheckboxWrapper>
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
                </CheckboxWrapper>
                <CheckboxWrapper>
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
                </CheckboxWrapper>
                <CheckboxWrapper>
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
                </CheckboxWrapper>
                <CheckboxWrapper>
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
                </CheckboxWrapper>
                <CheckboxWrapper>
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
                </CheckboxWrapper>
                <CheckboxWrapper>
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
                </CheckboxWrapper>
                <CheckboxWrapper>
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
                </CheckboxWrapper>
            </CheckboxContainer>
            <Button onPress={id ? handleAtualizarDados : handleEnviarDados}>
                <ButtonText>
                    {id ? "Atualizar" : "Cadastrar"}
                </ButtonText>
            </Button>
        </Container>
    );
}

export default Register;
