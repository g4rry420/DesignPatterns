import { CheesePizza, GreekPizza, PepproniPizza, ClamPizza, VeggiePizza } from "./pizza.js";

export const SimplePizzaFactory = function() {
  this.createPizza = function(type) {
    let pizza = null;
    if (type === "cheese") {
      pizza = new CheesePizza(type);
    } else if (type === "greek") {
      pizza = new GreekPizza(type);
    } else if (type === "pepperoni") {
      pizza = new PepproniPizza(type);
    } else if (type === "clam") {
      pizza = new ClamPizza(type);
    } else if (type === "veggie") {
      pizza = new VeggiePizza(type);
    }
    return pizza;
  };
};