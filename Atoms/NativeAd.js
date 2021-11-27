import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withNativeAd, AdIconView, MediaView, AdChoicesView, TriggerableView } from 'react-native-fbads';

const NativeAd = (props) => {
  return (
    <View style={styles.Adwrapper}>
      {/* <AdChoicesView style={{ position: 'absolute', left: 0, top: 0 }} /> */}
      <AdIconView style={{ width: 380, height: 90 }} />
      <MediaView style={{ width: 380, height: 90 }} />
      <TriggerableView>
        <Text>{props.nativeAd.description}</Text>
      </TriggerableView>
    </View>
  )
}
const styles = StyleSheet.create({
  Adwrapper: {
    width: 380,
    height: 380,
  }
})

export default withNativeAd(NativeAd);