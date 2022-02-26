import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';

export default function Container(props: any) {
  return (
    <SafeAreaView
      style={{
        ...{
          backgroundColor: '#eee',
          // width: Dimensions.get('window').width,
          // height: Dimensions.get('window').height,
          flex: 1,
        },
        ...props.style,
      }}>
      {props.children}
    </SafeAreaView>
  );
}
