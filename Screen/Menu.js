import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { BannerView } from 'react-native-fbads';

import { Colors } from '../Colors';
import Content from '../Content';

const Menu = ({ navigation }) => {

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.DescriptionText}>
          {Content.MenuText}
        </Text>
      </View>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId="276030287583357_276035734249479"
          type="large"
          onPress={() => console.log('click')}
          onLoad={() => console.log('loaded')}
          onError={(err) => console.log('error', err)}
        />
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('aftermenu')}
        underlayColor={Colors.Primary}
        style={styles.GetStartedButton}>
        <Text style={styles.GetStartedText}>Next</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.BG,
    justifyContent: 'space-between',
    padding: 25,
  },
  bannerContainer: {
    padding: 25,
    alignSelf: 'center',
    position: 'relative',
    bottom: 0,
    left: -200
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
export default Menu;