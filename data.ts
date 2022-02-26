export const localRestaurants = [
  {
    id: 1,
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    id: 3,
    name: "India's Grill",
    image_url:
      'https://media.istockphoto.com/photos/interior-of-a-modern-cozy-french-restaurant-picture-id1314951233?b=1&k=20&m=1314951233&s=170667a&w=0&h=XgyJ96HAeBPpC4c6PnvlN8pnIJw7PAkNhwySVvX2JQk=',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

export const foods: foodType = [
  {
    id: 1,
    res_id: 1,
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: 2,
    res_id: 1,
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    id: 3,
    res_id: 1,
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    id: 4,
    res_id: 1,
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    id: 5,
    res_id: 1,
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
  },
  {
    id: 6,
    res_id: 2,
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: 7,
    res_id: 2,
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgq8EhHuD3LAu6FniXWvkQCO1bnSstUu18zA&usqp=CAU',
  },
  {
    id: 8,
    res_id: 3,
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6V02EA3M609Cp9WgwHAhd1qNsUpernQdkw&usqp=CAU',
  },
  {
    id: 9,
    res_id: 3,
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LBq5kf1GWBnzu9bbi9VhN5k9YetVUdoxug&usqp=CAU',
  },
  {
    id: 10,
    res_id: 3,
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-wine-coq-au-vin-1586056485.jpg?crop=0.879xw:0.699xh;0.0639xw,0.205xh&resize=640:*',
  },
];
export type foodType = {
  id: number;
  res_id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}[];
