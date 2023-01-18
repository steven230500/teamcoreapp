import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/title';
import {SvgUri} from 'react-native-svg';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText="Welcome" />
      <View style={styles.bannerContainer}>
        <SvgUri
          uri={'https://www.teamcore.net/wp-content/uploads/2020/10/logoteamcore-azul-37.svg'}
          height={300}
          width={300}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  banner: {
    height: 100,
    width: 100,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
