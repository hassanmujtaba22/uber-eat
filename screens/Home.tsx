import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import Container from '../components/Container';
import Header from '../components/home/Header';
import RestaurantItems from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import {localRestaurants} from '../data';

export default function Home(props: any) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Karachi');
  const [activeTab, setActiveTab] = useState('Delivery');
  const YELP_API_KEY =
    'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(response => {
        if (response.businesses?.length > 0) {
          setRestaurantData(
            prev =>
              (prev = response?.businesses?.filter((bus: any) =>
                bus.transactions.includes(activeTab.toLowerCase()),
              )),
          );
        }
      });
  };

  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, [city, activeTab]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <View style={styles.headerSection}>
          <Header
            {...props}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SearchBar setCity={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems
            {...props}
            restaurantData={restaurantData}
            navigation={props.navigation}
          />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
      </Container>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  headerSection: {
    backgroundColor: 'white',
    padding: 15,
  },
});
