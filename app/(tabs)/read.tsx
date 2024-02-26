import React from 'react';

import {Container, Content } from '@/styles/tabs/Read';
import { TabsHeader } from '@/styles/global';
import UserPhoto from '@/components/UserPhoto';
import CardHistory from '@/components/CardHistory';
import SelectSlim from '@/components/SelectSlim';

const arraysTest = [
  {
    name: 'N5 Iniciante',
    value: 'N5',
    iconColor: 'green',
  },
  {
    name: 'N4 Básicos',
    value: 'N4',
    iconColor: 'blue',
  },
  {
    name: 'N3 Intermediarios',
    value: 'N3',
    iconColor: 'yellow',
  },
  {
    name: 'N2 Pré-avançado',
    value: 'N2',
    iconColor: 'orange',
  },
  {
    name: 'N1 Avançado',
    value: 'N1',
    iconColor: 'red',
  },
];


export default function TabTwoScreen() {
  return (
    <Container>
      <TabsHeader>
        <UserPhoto/>
      </TabsHeader>
      <SelectSlim
         itens={arraysTest}
         text='N5'
      />
     <Content>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
     </Content>
    </Container>
  );
};