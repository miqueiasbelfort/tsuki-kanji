import UserPhoto from '@/components/UserPhoto';
import { StyleSheet, SafeAreaView } from 'react-native';


export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <UserPhoto/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
