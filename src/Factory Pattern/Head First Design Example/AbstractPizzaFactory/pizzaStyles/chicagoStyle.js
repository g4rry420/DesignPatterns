import { Pizza } from "../pizza.js";

export const ChicagoStyleCheesePizza = function(type) {
  Pizza.call(this, type);
  this.name = "Chicago Style Deep Dish Cheese Pizza";
  this.dough = "Extra Thick Crust Dough";
  this.sauce = "Plum Tomato Sauce";

  this.toppings.push("Shredded Mozzarella Cheese");
};
ChicagoStyleCheesePizza.prototype = Object.create(Pizza.prototype);
ChicagoStyleCheesePizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const ChicagoStylePepperoniPizza = function(type) {
  Pizza.call(this, type);
  this.name = "Chicago Style Pepperoni Pizza";
  this.dough = "Extra Thick Crust Dough";
  this.sauce = "Plum Tomato Sauce";

  this.toppings.push("Shredded Mozzarella Cheese");
  this.toppings.push("Black Olives");
  this.toppings.push("Spinach");
  this.toppings.push("Eggplant");
  this.toppings.push("Sliced Pepperoni");
};
ChicagoStylePepperoniPizza.prototype = Object.create(Pizza.prototype);
ChicagoStylePepperoniPizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;  
};

export const ChicagoStyleClamPizza = function(type) {
  Pizza.call(this, type);
  this.name = "Chicago Style Clam Pizza";
  this.dough = "Extra Thick Crust Dough";
  this.sauce = "Plum Tomato Sauce";

  this.toppings.push("Shredded Mozzarella Cheese");
  this.toppings.push("Frozen Clams from Chesapeake Bay");
};
ChicagoStyleClamPizza.prototype = Object.create(Pizza.prototype);
ChicagoStyleClamPizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};

export const ChicagoStyleVeggiePizza = function(type) {
  Pizza.call(this, type);
  this.name = "Chicago Deep Dish Veggie Pizza";
  this.dough = "Extra Thick Crust Dough";
  this.sauce = "Plum Tomato Sauce";

  this.toppings.push("Shredded Mozzarella Cheese");
  this.toppings.push("Black Olives");
  this.toppings.push("Spinach");
  this.toppings.push("Eggplant");
};
ChicagoStyleVeggiePizza.prototype = Object.create(Pizza.prototype);
ChicagoStyleVeggiePizza.prototype.prepare = function() {
  console.log(`Preparing the ${this.type} pizza`);
  return this;
};