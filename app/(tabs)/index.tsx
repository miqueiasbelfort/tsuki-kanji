import { SafeAreaView } from 'react-native';

// styles
import {Container, TextInput, ViewInput, TextUpInput} from '@/styles/tabs/Home';
import {TabsHeader} from '@/styles/global';

// components
import UserPhoto from '@/components/UserPhoto';
import SelectSlim from '@/components/SelectSlim';

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

        <SelectSlim text='Kanjis N5'/>

      </Container>
    </SafeAreaView>
  );
};