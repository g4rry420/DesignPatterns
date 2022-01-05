import { Pizza } from "../pizza.js";

export const NYStyleCheesePizza = function(type) {
  Pizza.call(this, type);
  this.name = "NY Style Sauce and Cheese Pizza";
  this.dough = "Thin Crust Dough";
  this.sauce = "Marinara Sauce";
  this.toppings.push("Grated Reggiano Cheese");
};
NYStyleCheesePizza.prototype = Object.create(Pizza.prototype);
NYStyleCheesePizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const NYStyleClamPizza = function(type) {
  Pizza.call(this, type);
  this.name = "NY Style Clam Pizza";
  this.dough = "Thin Crust Dough";
  this.sauce = "Marinara Sauce";

  this.toppings.push("Grated Reggiano Cheese");
  this.toppings.push("Fresh Clams from Long Island Sound");
};
NYStyleClamPizza.prototype = Object.create(Pizza.prototype);
NYStyleClamPizza.prototype.prepare = function() {
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
