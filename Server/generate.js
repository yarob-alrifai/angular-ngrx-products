//Documentation: https://www.npmjs.com/package/faker
const { faker } = require("@faker-js/faker");
var database = {

  products:[],

};

function createRandomProducts() {
  return {

    id: faker.number.int({ min: 1, max: 100 }) ,
      addedOn: faker.date.past(),
      name: faker.word.sample(5),
      category:faker.helpers.arrayElement(['Drink', 'Soup', 'Sandwish','Burger']) ,
      description: faker.lorem.text(),
      imageUrl: faker.image.avatar(),
      price: faker.number.int({ min: 10, max: 100 })  ,
      quantity: 0,
  };
}

database.products = faker.helpers.multiple(createRandomProducts, {
  count: 50,
});

console.log(JSON.stringify(database));
