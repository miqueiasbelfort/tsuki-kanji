import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Link } from 'expo-router';

import {
    Container,
    ImgTop,
    Title,
    Content
} from '@/styles/auth/style';
import {
    InputIcon,
    Input,
    ButtonLarge,
    TextButtonH1
} from '@/styles/global';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ImgTemplo from '@/assets/images/templo.jpg';

export default function signup() {

    const [seePassword, setSeePassword] = useState(false);

    return (
        <Container>
            <ImgTop
                source={ImgTemplo}
            />
            <Title>Cadastrar</Title>
            <Content>
                <InputIcon>
                    <Input placeholder='Nome de Usuário' />
                    <AntDesign name="user" size={24} color="black" />
                </InputIcon>
                <InputIcon style={{ marginTop: 20 }}>
                    <Input placeholder='Email' />
                    <Fontisto name="email" size={24} color="black" />
                </InputIcon>
                <InputIcon style={{ marginTop: 20 }}>
                    <Input placeholder='Senha' secureTextEntry={seePassword} />
                    <Pressable onPress={() => setSeePassword(!seePassword)}>
                        {!seePassword ?
                            <FontAwesome name="eye" size={24} color="black" />
                            :
                            <FontAwesome name="eye-slash" size={24} color="black" />
                        }
                    </Pressable>
                </InputIcon>
                <Link
                    style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}
                    href="/signin/"
                >Já tenho conta!</Link>


                <ButtonLarge>
                    <TextButtonH1>Começar</TextButtonH1>
                </ButtonLarge>
            </Content>

        </Container>
    )
}