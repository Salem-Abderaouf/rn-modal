import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import { NativeAdsManager } from 'react-native-fbads';

import { Colors } from '../Colors';
import NativeAd from '../Atoms/NativeAd';
import Content from '../Content';

const Splash = ({ navigation }) => {

  const adsManager = new NativeAdsManager("276030287583357_276037784249274", 10)

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.DescriptionText}>
          {Content.GetStarted}
        </Text>
      </View>
      <View>
        <NativeAd
          adsManager={adsManager}
          adChoicePosition="bottomRight"
          expandable={false} />
      </View>

      <TouchableHighlight
        onPress={() => navigation.navigate('menu')}
        underlayColor={Colors.Primary}
        style={styles.GetStartedButton}>
        <Text style={styles.GetStartedText}>Get Started</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.BG,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
  },
  DescriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.FG,
  },
  GetStartedButton: {
    width: Dimensions.get('window').width - 30,
    height: 63,
    backgroundColor: Colors.Primary,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  GetStartedText: {
    color: Colors.BG,
    fontSize: 16,
    fontWeight: 'bold',
  }
})
export default Splash;