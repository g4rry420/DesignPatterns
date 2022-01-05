import {
  ThinCrustDough,
  ThickCrustDough,
  MarinaraSauce,
  PlumTomatoSauce,
  RegginaoCheese,
  MozzarellaCheese,
  Garlic,
  Onion,
  Mushroom,
  Redpepper,
  Spinach,
  BlackOlives,
  EggPlant,
  SlicedPepperoni,
  FreshClams,
  FrozenClams,
} from "./pizzaIngredient.js";

const PizzaIngredientFactory = function() {
  if (this.constructor === Animal) {
    throw new Error("Can't instantiate abstract class!");
  }
};
PizzaIngredientFactory.prototype.createDough = function() {
  throw new Error("Abstract method!");
};
PizzaIngredientFactory.prototype.createSauce = function() {
  throw new Error("Abstract method!");
};
PizzaIngredientFactory.prototype.createCheese = function() {
  throw new Error("Abstract method!");
};
PizzaIngredientFactory.prototype.createVeggies = function() {
  throw new Error("Abstract method!");
};
PizzaIngredientFactory.prototype.createPepperoni = function() {
  throw new Error("Abstract method!");
};
PizzaIngredientFactory.prototype.createClam = function() {
  throw new Error("Abstract method!");
};

export const NYPizzaIngredientFactory = function() {};
NYPizzaIngredientFactory.prototype = Object.create(PizzaIngredientFactory.prototype);
NYPizzaIngredientFactory.prototype.createDough = function() {
  return new ThinCrustDough();
};
NYPizzaIngredientFactory.prototype.createSauce = function() {
  return new MarinaraSauce();
};
NYPizzaIngredientFactory.prototype.createCheese = function() {
  return new RegginaoCheese();
};
NYPizzaIngredientFactory.prototype.createVeggies = function() {
  const veggies = [
    new Garlic(),
    new Onion(),
    new Mushroom(),
    new Redpepper(),
  ];
  return veggies;
};
NYPizzaIngredientFactory.prototype.createPepperoni = function() {
  return new SlicedPepperoni();
};
NYPizzaIngredientFactory.prototype.createClam = function() {
  return new FreshClams();
};

export const ChicagoPizzaIngredientFactory = function() {};
ChicagoPizzaIngredientFactory.prototype = Object.create(PizzaIngredientFactory.prototype);
ChicagoPizzaIngredientFactory.prototype.createDough = function() {
  return new ThickCrustDough();
};
ChicagoPizzaIngredientFactory.prototype.createSauce = function() {
  return new PlumTomatoSauce();
};
ChicagoPizzaIngredientFactory.prototype.createCheese = function() {
  return new MozzarellaCheese();
};
ChicagoPizzaIngredientFactory.prototype.createVeggies = function() {
  const veggies = [
    new Spinach(),
    new BlackOlives(),
    new EggPlant(),
  ];
  return veggies;
};
ChicagoPizzaIngredientFactory.prototype.createPepperoni = function() {
  return new SlicedPepperoni();
};
ChicagoPizzaIngredientFactory.prototype.createClam = function() {
  return new FrozenClams();
};
