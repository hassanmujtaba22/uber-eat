import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Header(props: any) {
  return (
    <View style={styles.container}>
      <HeaderButtons
        title="Delivery"
        textColor={props.activeTab === 'Delivery' ? 'white' : 'black'}
        bgColor={props.activeTab === 'Delivery' ? 'black' : 'white'}
        onPress={() => props.setActiveTab('Delivery')}
      />
      <HeaderButtons
        title="Pickup"
        textColor={props.activeTab === 'Pickup' ? 'white' : 'black'}
        bgColor={props.activeTab === 'Pickup' ? 'black' : 'white'}
        onPress={() => props.setActiveTab('Pickup')}
      />
    </View>
  );
}
const HeaderButtons = (props: any) => {
  return (
    <TouchableOpacity
      style={{...styles.headerBtn, ...{backgroundColor: props.bgColor}}}
      onPress={props.onPress}>
      <Text style={{...styles.btnText, ...{color: props.textColor}}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  headerBtn: {
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '900',
  },
});
