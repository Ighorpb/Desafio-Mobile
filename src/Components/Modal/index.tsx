import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {
    ModalContainer,
    ModalContent,
    CloseButton,
    CloseButtonText,
    Title,
    ContentContainer
} from './styles'

export function Modal({ isOpen, onClose, title, children }: any) {
    if (!isOpen) {
        return null;
    }

    return (
        <ModalContainer>
            <ModalContent>
                <CloseButton onPress={onClose}>
                    <CloseButtonText>&times;</CloseButtonText>
                </CloseButton>
                <Title>{title}</Title>
                <ContentContainer>{children}</ContentContainer>
            </ModalContent>
        </ModalContainer>

    );
};

