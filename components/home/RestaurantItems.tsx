import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItems(props: any) {
  return (
    <>
      {props.restaurantData.map((res: any, i: number) => (
        <TouchableOpacity
          key={i}
          activeOpacity={1}
          style={{marginBottom: 5}}
          onPress={() => {
            props.navigation.navigate('RestaurantDetail', {
              id: res.id,
              name: res.name,
              image: res.image_url,
              price: res.price,
              reviews: res.reviews,
              rating: res.rating,
              categories: res.categories,
            });
          }}>
          <View style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
            <RestaurantImage image={res.image_url} />
            <RestaurantInfo name={res.name} rating={res.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestaurantImage = (props: any) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props: any) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
