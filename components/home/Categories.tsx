import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Categories() {
  const items = [
    {
      image: require('../../assets/images/shopping-bag.png'),
      text: 'Pick-up',
    },
    {
      image: require('../../assets/images/soft-drink.png'),
      text: 'Soft Drinks',
    },
    {
      image: require('../../assets/images/bread.png'),
      text: 'Bakery Items',
    },
    {
      image: require('../../assets/images/fast-food.png'),
      text: 'Fast Foods',
    },
    {
      image: require('../../assets/images/deals.png'),
      text: 'Deals',
    },
    {
      image: require('../../assets/images/coffee.png'),
      text: 'Coffee & Tea',
    },
    {
      image: require('../../assets/images/desserts.png'),
      text: 'Desserts',
    },
  ];
  return (
    <View style={styles.box}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={styles.catBox} key={index}>
            <Image source={item.image} style={styles.catImg} />
            <Text style={styles.catText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  catBox: {
    alignItems: 'center',
    marginRight: 30,
  },
  catImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  catText: {
    fontSize: 13,
    fontWeight: '900',
  },
});
