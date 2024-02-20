import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {useRouter} from 'expo-router';

import { 
  Container,
  BackgroundImage,
  Content,
  Center,
  Texth1,
  Textp
} from '@/styles/Step1_style';
import {ButtonLarge, TextButtonH1} from '@/styles/global';

import Bg from '@/assets/images/step1_bg.png';

export default function Step1() {

  const router = useRouter();

  return (
    <Container>
      <StatusBar style='light'/>
      <BackgroundImage
        source={Bg}
      />
      <Content>
        <Texth1>Bem vindo ao Tsuki kanji</Texth1>
        <Textp>Aprenda kanji de forma fácil e rápido</Textp>
        <Center>
          <ButtonLarge onPress={() => router.push('/(tabs)/')}>
            <TextButtonH1>Começar</TextButtonH1>
          </ButtonLarge>
        </Center>
      </Content>
    </Container>
  )
}