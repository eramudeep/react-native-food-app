export const appColors = {
  primary: '#5117ac', //  '#d64b4b',
  secondary: '#fff',
  white: '#fff',
  black: '#000',
  bellIcon: '#2ed2c7',
  red: '#f1395e',
  gray:'#808080',
  bgLight :"#f6f6f6"
};

export const explorerCategories = [
  {
    label: 'Tacos',
    color: '#D0E6A5',
    image: require('../statics/images/tacos.png'),
  },
  {
    label: 'Fries',
    color: '#86E3CE',
    image: require('../statics/images/fries.png'),
  },
  {
    label: 'Burger',
    color: '#FFDD95',
    image: require('../statics/images/burger.png'),
  },
  {
    label: 'Pizza',
    color: '#FFACAC',
    image: require('../statics/images/pizza.png'),
  },
  {
    label: 'Burritos',
    color: '#CCAAD9',
    image: require('../statics/images/burritos.png'),
  },
];

export const popularProducts = [
  {
    label: 'Pizza Clásica',
    image: require('../statics/popular/pizza.png'),
    isFav: false,
    description: 'Salsa Clàsica de la casa',
    price: '$12.58',
  },
  {
    label: 'Hamburguesa mix',
    image: require('../statics/popular/pizza.png'),
    isFav: true,
    description: 'Doble carne con queso',
    price: '$12.58',
  },
  {
    label: 'Pizza Clásica',
    image: require('../statics/popular/pizza.png'),
    isFav: false,
    description: 'Salsa Clàsica de la casa',
    price: '$12.58',
  },
];
export const shadow = {
  shadowColor: '#808080',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};
