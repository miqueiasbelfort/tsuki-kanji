import React, {useState} from 'react';
import { Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

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
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ImgTemplo from '@/assets/images/templo.jpg';

export default function signin() {

    const router = useRouter();
    const [seePassword, setSeePassword] = useState(false);

  return (
    <Container>
        <ImgTop
            source={ImgTemplo}
        />
        <Title>Entrar</Title>
        <Content>
            <InputIcon style={{marginTop: 20}}>
                <Input placeholder='Email'/>
                <Fontisto name="email" size={24} color="black" />
            </InputIcon>
            <InputIcon style={{marginTop: 20}}>
                <Input placeholder='Senha' secureTextEntry={seePassword}/>
                <Pressable onPress={() => setSeePassword(!seePassword)}>
                    {!seePassword ?
                        <FontAwesome name="eye" size={24} color="black" />
                    :
                        <FontAwesome name="eye-slash" size={24} color="black" />
                    }
                </Pressable>
            </InputIcon>

            <Link
                style={{textAlign: 'right', marginTop: 20, marginBottom: 20, color: '#907AD6'}}
                href="/signUp/"
            >Esqueci minha senha!</Link>

            <Link
                style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}
                href="/signUp/"
            >Ainda não tenho conta!</Link>

            <ButtonLarge onPress={() => router.push('/(tabs)/')}>
                <TextButtonH1>Entrar</TextButtonH1>
            </ButtonLarge>
        </Content>
    </Container>
  )
}