import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Container from '../components/Container';
import About from '../components/resturentDetail/About';
import MenuItems from '../components/resturentDetail/MenuItems';
import ViewCart from '../components/resturentDetail/ViewCart';
import {foods, foodType} from '../data';

export default function RestaurantDetail({route, navigation}: any) {
  const [resFoods, setResFoods] = useState<foodType>();
  useEffect(() => {
    let filter: foodType = foods.filter(x => x.res_id === route.params.id);
    setResFoods(prev => (prev = filter));
  }, []);

  const {items} = useSelector((state: any) => state.cartReducer.selectedItems);

  const total = items
    .map((item: any) => Number(item.price.replace('$', '')))
    .reduce((prev: any, curr: any) => prev + curr, 0);

  return (
    <Container style={{paddingBottom: total ? 50 : 0}}>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems restaurantName={route.params.name} foods={resFoods} />
      <ViewCart navigation={navigation} />
    </Container>
  );
}
