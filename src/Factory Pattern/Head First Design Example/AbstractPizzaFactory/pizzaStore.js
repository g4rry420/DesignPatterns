import { ChicagoStyleCheesePizza, ChicagoStyleClamPizza, ChicagoStylePepperoniPizza, ChicagoStyleVeggiePizza } from "./pizzaStyles/chicagoStyle.js";
import { CheesePizza, ClamPizza, NYStylePepperoniPizza, NYStyleVeggiePizza } from "./pizzaStyles/nyStyle.js";
import { NYPizzaIngredientFactory, ChicagoPizzaIngredientFactory } from "./pizzaIngredientFactories.js";

const PizzaStore = function() {};
PizzaStore.prototype.orderPizza = function(type = "cheese") {
  const pizza = this.createPizza(type);

  pizza.prepare();
  pizza.bake();
  pizza.cut();
  pizza.box();
  return pizza;
};

PizzaStore.prototype.createPizza = function(type) {
  let pizza = null;
  if (type === "cheese") {
    pizza = new ChicagoStyleCheesePizza(type);
  } else if (type === "pepperoni") {
    pizza = new ChicagoStylePepperoniPizza(type);
  } else if (type === "clam") {
    pizza = new ChicagoStyleClamPizza(type);
  } else if (type === "veggie") {
    pizza = new ChicagoStyleVeggiePizza(type);
  }
  return pizza;
};

const nyPizzaIngredientFactory = new NYPizzaIngredientFactory();
export const NyStylePizzaStore = function() {};
NyStylePizzaStore.prototype = Object.create(PizzaStore.prototype);
NyStylePizzaStore.prototype.createPizza = function(type) {
  let pizza = null;
  if (type === "cheese") {
    pizza = new CheesePizza(nyPizzaIngredientFactory);
    pizza.setName("New York Style Cheese Pizza");
  } else if (type === "pepperoni") {
    pizza = new NYStylePepperoniPizza(type);
  } else if (type === "clam") {
    pizza = new ClamPizza(nyPizzaIngredientFactory);
    pizza.setName("New York Style Clam Pizza");
  } else if (type === "veggie") {
    pizza = new NYStyleVeggiePizza(type);
  }
  return pizza;
};

const chicagoPizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
export const ChicagoStylePizzaStore = function() {};
ChicagoStylePizzaStore.prototype = Object.create(PizzaStore.prototype);
ChicagoStylePizzaStore.prototype.createPizza = function(type) {
  let pizza = null;
  if (type === "cheese") {
    pizza = new CheesePizza(chicagoPizzaIngredientFactory);
    pizza.setName("Chicago Style Cheese Pizza");
  } else if (type === "pepperoni") {
    pizza = new ChicagoStylePepperoniPizza(type);
  } else if (type === "clam") {
    pizza = new ChicagoStyleClamPizza(type);
  } else if (type === "veggie") {
    pizza = new ChicagoStyleVeggiePizza(type);
  }
  return pizza;
};
