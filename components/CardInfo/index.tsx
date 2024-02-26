import React from 'react';

import { Modal, TouchableOpacity, View } from 'react-native';
import { Body, Container, Content, ExText, Header, Kanji, Span, Title } from './style';

import { EvilIcons } from '@expo/vector-icons';

interface Props {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
};

export default function CardInfo({ modalVisible, setModalVisible }: Props) {

    return (
        <Modal
            animationType="fade"
            visible={modalVisible}
            transparent={true}
        >
            <Container>
                <Content>
                    <Header>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <EvilIcons name="close" size={30} color="black" />
                        </TouchableOpacity>
                    </Header>
                    <Body>
                        <View>
                            <Title>Ir, indo, jornada, linha</Title>
                            <Kanji>行く</Kanji>
                        </View>
                        <View>
                            <Span>Kun: いく</Span>
                            <Span>On: コウ</Span>
                        </View>
                        <View>
                            <ExText>明日、和が行く。</ExText>
                            <ExText>明日、和が行きません。</ExText>
                            <ExText>明日、和が行ます。</ExText>
                        </View>
                    </Body>
                </Content>
            </Container>
        </Modal>
    );
};