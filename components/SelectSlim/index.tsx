import React, { useState } from 'react';

import { Modal, View } from 'react-native';
import Checkbox from 'expo-checkbox';
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
    ColorIconc,
    ModalScreen,
    ModalScreenView,
    ButtonOk,
    ButtonOkText
} from './style';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

interface Props {
    text: string,
    itens: {
        name: string,
        value: string,
        iconColor: string
    }[]
};



export default function SelectSlim({ text, itens }: Props) {

    const [placeholder, setPlaceholder] = useState(text);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Select onPress={() => setModalVisible(true)}>
                <Text>Kanjis {placeholder}</Text>
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
                                {itens.map((item) => (
                                    <ModalItem key={item.value} onPress={() => setPlaceholder(item.value)}>
                                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                            <ColorIconc backgroundColor={item.iconColor} />
                                            <ModalItemText>{item.name}</ModalItemText>
                                        </View>
                                        <Checkbox
                                            style={{margin: 8}}
                                            value={item.value == placeholder}
                                            onValueChange={() => {}}
                                            color={item.value == placeholder ? item.iconColor : undefined}
                                        />
                                    </ModalItem>
                                ))}
                                
                            </ModalContents>
                        </ModalContainerScroll>
                    </ModalScreenView>
                </ModalScreen>
            </Modal>
        </>
    );
};