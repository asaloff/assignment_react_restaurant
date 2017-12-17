const Faker = require('faker');

const menu = [
  {
    Appetizers: []
  },
  {
    Salads: []
  },
  {
    Sandwiches: []
  },
  {
    Entrees: []
  }
];

menu.forEach(section => {
  let key = Object.keys(section)[0];

  for (var i = 0; i < 11; i++) {
    section[key].push({
      name: Faker.lorem.words(),
      price: `$${ Math.floor(Math.random() * 20) }`
    });
  }
});

export default menu;
