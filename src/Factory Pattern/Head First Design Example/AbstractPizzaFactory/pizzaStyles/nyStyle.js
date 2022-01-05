import { Pizza } from "../pizza.js";

export const CheesePizza = function(ingredientFactory) {
  this.ingredientFactory = ingredientFactory;
  this.dough = ingredientFactory.createDough();
  this.sauce = ingredientFactory.createSauce();
  this.cheese = ingredientFactory.createCheese();
};
CheesePizza.prototype = Object.create(Pizza.prototype);
CheesePizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.name} pizza`);
};

export const ClamPizza = function(ingredientFactory) {
  this.ingredientFactory = ingredientFactory;
  this.dough = ingredientFactory.createDough();
  this.sauce = ingredientFactory.createSauce();
  this.cheese = ingredientFactory.createCheese();
  this.clam = ingredientFactory.createClam();
};
ClamPizza.prototype = Object.create(Pizza.prototype);
ClamPizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const NYStylePepperoniPizza = function(type) {
  Pizza.call(this, type);
  this.name = "NY Style Clam Pizza";
  this.dough = "Thin Crust Dough";
  this.sauce = "Marinara Sauce";

  this.toppings.push("Grated Reggiano Cheese");
  this.toppings.push("Fresh Clams from Long Island Sound");
};
NYStylePepperoniPizza.prototype = Object.create(Pizza.prototype);
NYStylePepperoniPizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const NYStyleVeggiePizza = function(type) {
  Pizza.call(this, type);
  this.name = "NY Veggie Pizza";
  this.dough = "Thin Crust Dough";
  this.sauce = "Plum Tomato Sauce";

  this.toppings.push("Shredded Mozzarella Cheese");
  this.toppings.push("Black Olives");
  this.toppings.push("Spinach");
  this.toppings.push("Eggplant");
};
NYStyleVeggiePizza.prototype = Object.create(Pizza.prototype);
NYStyleVeggiePizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};
