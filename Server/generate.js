// Import faker library and destructure the faker object
const { faker } = require("@faker-js/faker");

// Define an empty database object
var database = {
  products: [],
};

// Function to create random products
function createRandomProducts() {
  return {
    // Generate random values for product properties using faker functions
    id: faker.number.int({ min: 1, max: 100 }),
    addedOn: faker.date.past(),
    name: faker.word.sample(5),
    category: faker.helpers.arrayElement(['Drink', 'Soup', 'Sandwish', 'Burger']),
    description: faker.lorem.text(),
    imageUrl: faker.image.avatar(),
    price: faker.number.int({ min: 10, max: 100 }),
    quantity: 0,
  };
}

// Generate an array of random products using faker.helpers.multiple
database.products = faker.helpers.multiple(createRandomProducts, {
  count: 50,
});

// Log the generated database object as a JSON string
console.log(JSON.stringify(database));
