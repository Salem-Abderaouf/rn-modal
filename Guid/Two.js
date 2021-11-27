import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { BannerView } from 'react-native-fbads';

import { Colors } from '../Colors'
import Content from '../Content';

const Two = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.bloc}>
          <Text style={styles.blocHeading}>{Content.SecondHeading.one}</Text>
          <Text style={styles.blocParagraph}>{Content.SecondParaghraph.one}</Text>
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
        <View style={styles.bloc}>
          <Text style={styles.blocHeading}>{Content.SecondHeading.two}</Text>
          <Text style={styles.blocParagraph}>{Content.SecondParaghraph.two}</Text>
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
        <View style={styles.bloc}>
          <Text style={styles.blocHeading}>{Content.SecondHeading.three}</Text>
          <Text style={styles.blocParagraph}>{Content.SecondParaghraph.three}</Text>
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
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bloc: {
    padding: 25,
  },
  blocHeading: {
    color: Colors.Primary,
    fontSize: 20,
  },
  blocParagraph: {
    color: Colors.FG,
    textAlign: "justify",
    lineHeight: 25
  },
  bannerContainer: {
    padding: 25,
    alignSelf: 'center',
    position: 'relative',
    bottom: 0,
    left: -200
  }
})
export default Two;