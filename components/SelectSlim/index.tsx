import React, { useState } from 'react';

import { Modal, View } from 'react-native';
import {
    Select,
    Text,
    ModalHeader,
    ModalBtnExit,
    ModalTitle,
    ModalContainerScroll,
    ModalContents,
    ModalItem,
    ModalItemText,
    ModalScreen,
    ModalScreenView
} from './style';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

interface Props {
    text: string
};

export default function SelectSlim({ text }: Props) {

    const [placeholder, setPlaceholder] = useState(text);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Select onPress={() => setModalVisible(true)}>
                <Text>{placeholder}</Text>
                <AntDesign name="caretdown" size={15} color="black" />
            </Select>

            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
            >
                <ModalScreen>
                    <ModalScreenView>
                        <ModalHeader>
                            <ModalTitle>Níveis de Kanjis</ModalTitle>
                            <ModalBtnExit onPress={() => setModalVisible(false)}>
                                <EvilIcons name="close" size={30} color="black" />
                            </ModalBtnExit>
                        </ModalHeader>
                        <ModalContainerScroll>
                            <ModalContents>

                            </ModalContents>
                        </ModalContainerScroll>
                    </ModalScreenView>
                </ModalScreen>
            </Modal>
        </>
    );
};