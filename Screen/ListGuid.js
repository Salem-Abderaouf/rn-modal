import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { BannerView } from 'react-native-fbads';

import { Colors } from '../Colors'
import Content from '../Content';

const ListGuid = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.box}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('one')}
        >
          <Text style={styles.ButtonText}>{Content.OneButton}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('two')}
        >
          <Text style={styles.ButtonText}>{Content.TwoButton}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('three')}
        >
          <Text style={styles.ButtonText}>{Content.ThreeButton}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('four')}
        >
          <Text style={styles.ButtonText}>{Content.FourButton}</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.bannerContainer}>
        <BannerView
          placementId='276030287583357_276035734249479'
          type="large"
          onPress={() => console.log('click')}
          onLoad={() => console.log('loaded')}
          onError={(err) => console.log('error', err)}
        />
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: Colors.BG,
  },
  button: {
    backgroundColor: Colors.Primary,
    width: Dimensions.get('window').width - 30,
    borderRadius: 24,
    height: 73,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bannerContainer: {
    padding: 25,
    alignSelf: 'center',
    position: 'relative',
    bottom: 0,
    left: -200
  },
  ButtonText: {
    color: Colors.BG,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
  }
})

export default ListGuid;