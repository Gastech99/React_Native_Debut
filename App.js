import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.monEcran}>
      <View style={styles.colone1}></View>
      <View style={styles.colone2}></View>
      <View style={styles.colone3}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monEcran: {
    flex:1,
    backgroundColor: "orange",
    flexDirection:"row",
  },
  colone1:{
    flex:1,
    backgroundColor:"green",
  },
  colone2:{
    flex: 1,
    backgroundColor:"yellow",
  },
  colone3:{
    flex: 1,
    backgroundColor:"red",
  },
});
