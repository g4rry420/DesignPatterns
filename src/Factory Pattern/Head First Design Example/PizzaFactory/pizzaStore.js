import { ChicagoStyleCheesePizza, ChicagoStyleClamPizza, ChicagoStylePepperoniPizza, ChicagoStyleVeggiePizza } from "./pizzaStyles/chicagoStyle.js";
import { NYStyleCheesePizza, NYStyleClamPizza, NYStylePepperoniPizza, NYStyleVeggiePizza } from "./pizzaStyles/nyStyle.js";

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
  throw new Error("Abstract method!");
};

export const NyStylePizzaStore = function() {};
NyStylePizzaStore.prototype = Object.create(PizzaStore.prototype);
NyStylePizzaStore.prototype.createPizza = function(type) {
  let pizza = null;
  if (type === "cheese") {
    pizza = new NYStyleCheesePizza(type);
  } else if (type === "pepperoni") {
    pizza = new NYStylePepperoniPizza(type);
  } else if (type === "clam") {
    pizza = new NYStyleClamPizza(type);
  } else if (type === "veggie") {
    pizza = new NYStyleVeggiePizza(type);
  }
  return pizza;
};

export const ChicagoStylePizzaStore = function() {};
ChicagoStylePizzaStore.prototype = Object.create(PizzaStore.prototype);
ChicagoStylePizzaStore.prototype.createPizza = function(type) {
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
