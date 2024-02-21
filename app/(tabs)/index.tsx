import { SafeAreaView, View } from 'react-native';

// styles
import {Container, TextInput, ViewInput, TextUpInput} from '@/styles/tabs/Home';
import {TabsHeader} from '@/styles/global';

// components
import UserPhoto from '@/components/UserPhoto';
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

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        
        <TabsHeader>
          <UserPhoto/>
        </TabsHeader>

        <TextUpInput>Todos os kanjis</TextUpInput>
        <ViewInput>
          <TextInput placeholder='pesquise por furigana, hiragana ou português'/>
        </ViewInput>

        <View style={{marginTop: 15}}>
          <SelectSlim text='N5' itens={arraysTest}/>
        </View>

      </Container>
    </SafeAreaView>
  );
};