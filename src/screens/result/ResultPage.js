import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/title';

const ResultPage = ({navigation}) => {

  const finishBanner = 'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png'
  return (
    <View style={styles.container}>
      <Title titleText="Answers sent" />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: finishBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
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
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
